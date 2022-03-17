:: Run this batch file instead of "npm run export"
:: This short script will automatically build
:: the site and duplicate index.html as 404.html,
:: for deployment via GitHub Pages
::
:: Useful resource on copying folders: https://stackoverflow.com/questions/986447/batch-file-to-copy-files-from-one-folder-to-another-folder

@echo off

:: Delete old content
if exist .\docs\ del .\docs /s /q

:: Delete folders
:: https://stackoverflow.com/a/13800688
:: this doesn't work--too bad! I don't feel like fixing it right now
:: if exist .\docs\ for /r /d .\docs\ %%a in (*) do rd %a /s /q

:: Build Website
call npx sapper export --legacy

:: Transfer Files
xcopy /s /E /y .\__sapper__\export\ .\docs\
copy .\docs\index.html .\docs\404.html
copy .\CNAME_STORAGE .\docs\CNAME
