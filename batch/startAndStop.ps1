# Example of lazy start up and stop approach using PowerShell
# These need in thier own files and called via a shorcut with a property similar to:
# %SystemRoot%\system32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -File "\the\location\of\the\file\start-up.ps1"
# Run Get-Executionpolicy to check if you can run scripts on your system. If you can't change this, check out the .bat version.

# Start Up Script 
Get-Process | Where-Object { $_.Name -eq "iexplore" } | Select-Object | Stop-Process
Sleep 3

Start-Process OUTLOOK
Start-Process explorer "\\domain\Your Name\My Documents"
Start-Process iexplore "http://www.theseleniumguys.com"

#Shut Down Script
Get-Process | Where-Object { $_.Name -eq "OUTLOOK" } | Select-Object | Stop-Process
Get-Process | Where-Object { $_.Name -eq "iexplore" } | Select-Object | Stop-Process
Get-Process | Where-Object { $_.Name -eq "explorer" } | Select-Object | Stop-Process
Sleep 3
Start-Process explorer
