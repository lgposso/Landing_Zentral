# ---------------------------------------------------------------------------
# prepare-logos.ps1
#
# Los logos originales de Zentral son PNG de 24bpp SIN canal alfa, con fondo
# negro solido y mucho relleno muerto alrededor del arte. Sobre el fondo del
# sitio (#0A0A0A) eso se veria como un rectangulo negro recortado.
#
# Este script convierte cada logo a un PNG con transparencia real:
#   alpha = max(R,G,B)                      -> el negro puro desaparece
#   color = (R,G,B) * 255 / alpha           -> se "desmultiplica" el color
# El resultado compuesto sobre cualquier fondo es identico al original
# compuesto sobre negro, pero ahora funciona sobre cualquier superficie.
#
# Ademas recorta al bounding box del contenido para que el padding lo controle
# el CSS y no el archivo.
#
# Uso:  powershell -ExecutionPolicy Bypass -File scripts\prepare-logos.ps1
# Solo hay que volver a correrlo si cambian los archivos de marca originales.
# ---------------------------------------------------------------------------

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

# Carpeta que contiene los archivos de marca originales.
$SourceDir = Join-Path $PSScriptRoot '..\..'
$OutDir    = Join-Path $PSScriptRoot '..\public'
$AppDir    = Join-Path $PSScriptRoot '..\app'

function Convert-Logo {
    param(
        [string]$SourcePath,
        [string]$DestPath,
        [int]$Threshold = 10,
        [int]$SquareSize = 0   # si es > 0, encaja el resultado en un lienzo cuadrado
    )

    if (-not (Test-Path $SourcePath)) {
        Write-Warning "No encontrado: $SourcePath"
        return
    }

    $src = New-Object System.Drawing.Bitmap($SourcePath)
    $w = $src.Width
    $h = $src.Height

    $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $data = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly,
                          [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $stride = $data.Stride
    $bytes = New-Object byte[] ($stride * $h)
    [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
    $src.UnlockBits($data)
    $src.Dispose()

    # --- Pasada 1: convertir a alfa y localizar el bounding box del contenido.
    $minX = $w; $minY = $h; $maxX = -1; $maxY = -1

    for ($y = 0; $y -lt $h; $y++) {
        $row = $y * $stride
        for ($x = 0; $x -lt $w; $x++) {
            $i = $row + $x * 4          # orden en memoria: B G R A
            $b = $bytes[$i]
            $g = $bytes[$i + 1]
            $r = $bytes[$i + 2]

            $a = $r
            if ($g -gt $a) { $a = $g }
            if ($b -gt $a) { $a = $b }

            if ($a -eq 0) {
                $bytes[$i + 3] = 0
                continue
            }

            # Desmultiplicar: lleva el color a su intensidad plena y deja la
            # luminosidad expresada en el canal alfa.
            $scale = 255.0 / $a
            $nb = [int]($b * $scale); if ($nb -gt 255) { $nb = 255 }
            $ng = [int]($g * $scale); if ($ng -gt 255) { $ng = 255 }
            $nr = [int]($r * $scale); if ($nr -gt 255) { $nr = 255 }

            $bytes[$i]     = [byte]$nb
            $bytes[$i + 1] = [byte]$ng
            $bytes[$i + 2] = [byte]$nr
            $bytes[$i + 3] = [byte]$a

            if ($a -ge $Threshold) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }

    if ($maxX -lt 0) { Write-Warning "Imagen vacia: $SourcePath"; return }

    # --- Escribir el buffer procesado en un bitmap ARGB completo.
    $full = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $fd = $full.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly,
                         [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    # El stride del bitmap nuevo coincide con el del original (mismo ancho y formato).
    [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $fd.Scan0, $bytes.Length)
    $full.UnlockBits($fd)

    # --- Recortar al contenido.
    $cropW = $maxX - $minX + 1
    $cropH = $maxY - $minY + 1
    $cropRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
    $cropped = $full.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $full.Dispose()

    $final = $cropped

    if ($SquareSize -gt 0) {
        # Lienzo cuadrado con el arte centrado y un 12% de margen: lo que
        # esperan los favicons y los iconos de app.
        $canvas = New-Object System.Drawing.Bitmap($SquareSize, $SquareSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $gfx = [System.Drawing.Graphics]::FromImage($canvas)
        $gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $gfx.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $gfx.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $inner = [int]($SquareSize * 0.76)
        $ratio = [Math]::Min($inner / $cropW, $inner / $cropH)
        $dw = [int]($cropW * $ratio)
        $dh = [int]($cropH * $ratio)
        $dx = [int](($SquareSize - $dw) / 2)
        $dy = [int](($SquareSize - $dh) / 2)

        $gfx.DrawImage($cropped, $dx, $dy, $dw, $dh)
        $gfx.Dispose()
        $cropped.Dispose()
        $final = $canvas
    }

    $destDir = Split-Path $DestPath -Parent
    if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

    $final.Save($DestPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output ("OK  {0}  ({1}x{2})" -f (Split-Path $DestPath -Leaf), $final.Width, $final.Height)
    $final.Dispose()
}

Convert-Logo -SourcePath (Join-Path $SourceDir 'Zentral_Logo_Horizontal.png') `
             -DestPath   (Join-Path $OutDir 'logo-zentral.png')

Convert-Logo -SourcePath (Join-Path $SourceDir 'Icono_Zentral.png') `
             -DestPath   (Join-Path $OutDir 'isotipo-zentral.png')

# Iconos de app que Next.js detecta por convencion de archivo.
Convert-Logo -SourcePath (Join-Path $SourceDir 'Icono_Zentral.png') `
             -DestPath   (Join-Path $AppDir 'icon.png') -SquareSize 512

Convert-Logo -SourcePath (Join-Path $SourceDir 'Icono_Zentral.png') `
             -DestPath   (Join-Path $AppDir 'apple-icon.png') -SquareSize 180
