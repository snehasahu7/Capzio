@echo off
title Capzio - Image Caption Generator
color 0B
cls
echo ===================================================
echo   Capzio - Image Caption Generator
echo ===================================================
echo.

REM Check if Python is available
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Python is not installed or not in PATH.
    echo Please install Python and try again.
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

REM Check if Node.js is available
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please install Node.js and try again.
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo ===================================================
echo   Setting up the application
echo ===================================================
echo.

echo [1/4] Installing backend dependencies...
cd backend
python -m pip install flask pillow tensorflow flask-cors numpy
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install Python packages.
    cd ..
    pause
    exit /b 1
)
cd ..
echo [OK] Backend dependencies installed.
echo.

echo [2/4] Installing frontend dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install npm packages.
    pause
    exit /b 1
)
echo [OK] Frontend dependencies installed.
echo.

echo ===================================================
echo   Starting the application
echo ===================================================
echo.

echo [3/4] Starting backend server...
start cmd /k "cd %~dp0backend && python main.py"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to start the backend server.
    pause
    exit /b 1
)
echo [OK] Backend server started in a new window.
echo.

echo [4/4] Starting frontend server...
start cmd /k "cd %~dp0 && npm run dev"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to start the frontend server.
    pause
    exit /b 1
)
echo [OK] Frontend server started in a new window.
echo.

echo [INFO] Waiting for servers to initialize (5 seconds)...
timeout /t 5 >nul

echo [INFO] Opening browser...
start http://localhost:5173

echo.
echo ===================================================
echo   Application started successfully!
echo ===================================================
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo.
echo To stop the application:
echo 1. Close the backend server window
echo 2. Close the frontend server window
echo.
echo Press any key to exit this launcher...
pause >nul
exit /b 0 