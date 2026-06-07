@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Pop 3

echo.
echo  Demarrage de Pop 3...
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo  ERREUR : Node.js n'est pas installe.
  echo  Telechargez-le sur https://nodejs.org puis reessayez.
  echo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo  Installation des dependances...
  call npm install
  echo.
)

echo  Obfuscation du code...
call npm run build
echo.

for /f "tokens=5" %%a in ('netstat -ano 2^>nul ^| findstr :8080 ^| findstr LISTENING') do (
  taskkill /F /PID %%a >nul 2>&1
)

start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8080"

echo  Le navigateur va s'ouvrir sur http://localhost:8080
echo  Gardez cette fenetre ouverte. Fermez-la pour arreter le site.
echo.

node server.js
