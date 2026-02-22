param (
    [Parameter(Mandatory=$true)]
    [string]$Folder,
    
    [Parameter(Mandatory=$true)]
    [string]$Prefix
)

if (-not (Test-Path $Folder)) {
    Write-Error "Folder $Folder does not exist."
    return
}

$files = Get-ChildItem -Path "$Folder/*" -Include *.jpg, *.jpeg, *.png, *.PNG, *.JPG, *.JPEG | Sort-Object Name
$i = 1

foreach ($file in $files) {
    $extension = $file.Extension
    $newName = "{0}{1:D2}{2}" -f $Prefix, $i, $extension
    $newPath = Join-Path -Path $Folder -ChildPath $newName
    
    # Check if new name is same as old name to avoid error
    if ($file.FullName -ne $newPath) {
        Write-Host "Renaming $($file.Name) to $newName"
        Rename-Item -Path $file.FullName -NewName $newName
    }
    $i++
}

Write-Host "Renaming complete for $Folder"
