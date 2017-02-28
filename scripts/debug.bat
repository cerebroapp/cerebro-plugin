@echo off
IF "%1%"==""dev"" (
  set appname=Electron
) ELSE (
  set appname=Cerebro
)

for %%* in (.) do set dirname=%%~nx*
SET symlink="%APPDATA%\%appname%\plugins\node_modules\%dirname%"

echo "Creating symlink: %symlink% -> %cd%"

mklink /d %symlink% "%cd%"
start "" /wait node_modules\.bin\webpack --watch
