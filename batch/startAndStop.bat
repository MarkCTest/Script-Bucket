REM Startup of commonly used applications
taskkill /F /IM iexplore.exe
sleep 3
start outlook
start explorer \\domain\Your Name\My Documents
start iexplore "http://www.theseleniumguys.com"

REM Shutdown of items to clear the workspace
taskkill /F /IM outlook.exe
taskkill /F /IM iexplore.exe
taskkill /F /IM explorer.exe
sleep 3
start explorer.exe
