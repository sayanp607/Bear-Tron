# Run Backend and Frontend Together

Write-Host "🚀 Starting BearTron..." -ForegroundColor Cyan
Write-Host ""

# Start Backend in a new window
Write-Host "📡 Starting Backend Server (Port 5000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; Write-Host '🔧 Backend Server' -ForegroundColor Green; pnpm dev"

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start Frontend in a new window
Write-Host "🎨 Starting Frontend Server (Port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; Write-Host '🎨 Frontend Server' -ForegroundColor Blue; pnpm dev"

Write-Host ""
Write-Host "✅ Both servers are starting!" -ForegroundColor Green
Write-Host "📡 Backend:  http://localhost:5000" -ForegroundColor Yellow
Write-Host "🎨 Frontend: http://localhost:3000" -ForegroundColor Blue
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
