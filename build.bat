:: Run this batch file instead of "ng build"
:: This short script will automatically build
:: the site and duplicate index.html as 404.html,
:: as per the instructions defined at
:: https://angular.io/guide/deployment#deploy-to-github-pages

@echo off

ng build && copy .\docs\index.html .\docs\404.html && copy .\CNAME_STORAGE .\docs\CNAME
