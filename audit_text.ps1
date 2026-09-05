$files = Get-ChildItem -Path "C:\Users\USER\.gemini\antigravity\scratch\harrison-mosco-platform\app", "C:\Users\USER\.gemini\antigravity\scratch\harrison-mosco-platform\components" -Recurse -Filter "*.tsx"
$found = 0
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match "\u2014") {
        Write-Host "EM-DASH IN: " $f.Name
        $found++
    }
}
if ($found -eq 0) {
    Write-Host "CLEAN: 0 em-dashes found across all components and pages."
}
