# File: create-empty-structure.ps1
# Usage:
# 1. Open PowerShell in your desired folder (empty or otherwise).
# 2. Run: .\create-empty-structure.ps1
# 3. It will create the directory structure and empty files.

# Create directories
New-Item -ItemType Directory -Force -Name "backend" | Out-Null
New-Item -ItemType Directory -Force -Name "public" | Out-Null
New-Item -ItemType Directory -Force -Name "src" | Out-Null
New-Item -ItemType Directory -Force -Name "src\components" | Out-Null
New-Item -ItemType Directory -Force -Name "src\data" | Out-Null
New-Item -ItemType Directory -Force -Name "src\pages" | Out-Null
New-Item -ItemType Directory -Force -Name "src\pages\interactive" | Out-Null

# Create empty files
New-Item -ItemType File -Force -Path "package.json" | Out-Null
New-Item -ItemType File -Force -Path ".gitignore" | Out-Null
New-Item -ItemType File -Force -Path "public\index.html" | Out-Null
New-Item -ItemType File -Force -Path "src\index.js" | Out-Null
New-Item -ItemType File -Force -Path "src\App.js" | Out-Null
New-Item -ItemType File -Force -Path "src\App.css" | Out-Null
New-Item -ItemType File -Force -Path "src\components\Sidebar.js" | Out-Null
New-Item -ItemType File -Force -Path "src\components\MainContent.js" | Out-Null
New-Item -ItemType File -Force -Path "src\data\sidebarData.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\Home.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\Writing.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\Bookmarks.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\Projects.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\Work.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\Interactive.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\SocialMedia.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\interactive\BookCalendar.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\interactive\AMA.js" | Out-Null
New-Item -ItemType File -Force -Path "src\pages\interactive\ShareMessage.js" | Out-Null
New-Item -ItemType File -Force -Path "backend\app.py" | Out-Null
New-Item -ItemType File -Force -Path "backend\requirements.txt" | Out-Null
