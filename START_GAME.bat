@echo off
title Retro Bowl
cd /d "%~dp0"
echo Starting Retro Bowl...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    start "" http://localhost:8000
    python -m http.server 8000
    goto :eof
)
py --version >nul 2>&1
if %errorlevel% equ 0 (
    start "" http://localhost:8000
    py -m http.server 8000
    goto :eof
)
echo Python not found
pause
