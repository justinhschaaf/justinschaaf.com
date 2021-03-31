:: Run this batch file instead of "npm run export"
:: This short script will automatically build
:: the site and duplicate index.html as 404.html,
:: for deployment via GitHub Pages
::
:: Useful resource on copying folders: https://stackoverflow.com/questions/986447/batch-file-to-copy-files-from-one-folder-to-another-folder

@echo off

npx sapper export --legacy && xcopy /s /E /y .\__sapper__\export\ .\docs\ && copy .\docs\index.html .\docs\404.html && copy .\CNAME_STORAGE .\docs\CNAME
