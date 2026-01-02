# Run Both Frontend and Backend Servers

Write-Host "🚀 Starting BearTron Platform..." -ForegroundColor Cyan
Write-Host ""

# Start Backend in a new window
Write-Host "📡 Starting Backend API (Port 5000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; Write-Host '=== BACKEND SERVER ===' -ForegroundColor Green; Write-Host 'Port: 5000' -ForegroundColor Cyan; Write-Host ''; pnpm dev"

# Wait for backend to start
Start-Sleep -Seconds 2

# Start Frontend in a new window
Write-Host "🎨 Starting Frontend App (Port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; Write-Host '=== FRONTEND SERVER ===' -ForegroundColor Blue; Write-Host 'Port: 3000' -ForegroundColor Cyan; Write-Host ''; pnpm dev"

Write-Host ""
Write-Host "✅ Both servers are starting in separate windows!" -ForegroundColor Green
Write-Host ""
Write-Host "📡 Backend API:  http://localhost:5000" -ForegroundColor Yellow
Write-Host "🎨 Frontend App: http://localhost:3000" -ForegroundColor Blue
Write-Host ""
Write-Host "📝 Check the server windows for logs and errors" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key to close this launcher..." -ForegroundColor DarkGray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
