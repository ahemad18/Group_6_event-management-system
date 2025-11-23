# GitHub Repository Setup Guide

## Step-by-Step Instructions to Push Your Project to GitHub

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

### Step 2: Create a New Repository on GitHub
1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `team-name_event-management-system`
     (Replace "team-name" with your actual team name)
   - **Description**: "Event Management System - A comprehensive solution for managing events, registrations, and attendees"
   - **Visibility**: Select **Public** (required for your assignment)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 3: Link Your Local Repository to GitHub

After creating the repository, GitHub will show you instructions. Use these commands in PowerShell:

#### Option A: If you see the "quick setup" page

Copy the repository URL (it will look like: `https://github.com/your-username/team-name_event-management-system.git`)

Then run these commands:

```powershell
cd "d:\Sem 3\Project Management\project"
git remote add origin https://github.com/YOUR-USERNAME/team-name_event-management-system.git
git branch -M main
git push -u origin main
```

**Note**: Replace `YOUR-USERNAME` and `team-name` with your actual GitHub username and team name.

#### Option B: Alternative method using master branch

```powershell
cd "d:\Sem 3\Project Management\project"
git remote add origin https://github.com/YOUR-USERNAME/team-name_event-management-system.git
git push -u origin master
```

### Step 4: Verify Your Repository

1. Refresh your GitHub repository page
2. You should see all your files:
   - README.md
   - CHANGELOG.md
   - CONTRIBUTING.md
   - docs/ folder
   - src/ folder
   - assets/ folder

3. Click on "Commits" to verify all three commits are there:
   - ✅ Initial setup: Project structure, README, and basic frontend files
   - ✅ Progress update: Added event management features, registration form, and search functionality
   - ✅ Final version: Complete documentation, user guide, developer guide, and contributing guidelines

### Step 5: Get Your Repository Link

1. On your GitHub repository page, click the green "Code" button
2. Copy the HTTPS URL (e.g., `https://github.com/your-username/team-name_event-management-system`)
3. This is the link you'll add to your Basecamp Docs & Files section

### Step 6: Add to Basecamp

1. Log in to Basecamp
2. Navigate to your project
3. Go to "Docs & Files" section
4. Create a new document or message with:
   - **Project Name**: Event Management System
   - **GitHub Repository**: [Your copied URL]
   - **Status**: Public Repository
   - **Version**: 3.0 (Final Release)

### Example Basecamp Entry:

```
📦 Event Management System - GitHub Repository

Repository URL: https://github.com/your-username/team-name_event-management-system
Status: ✅ Public
Current Version: 3.0

Project Commits:
1. Initial setup (v1.0)
2. Progress update (v2.0)
3. Final version (v3.0)

Features:
- Event browsing and management
- Registration system with validation
- Search functionality
- Comprehensive documentation
```

## Troubleshooting

### Authentication Issues
If asked for credentials:
- GitHub no longer accepts passwords for Git operations
- Use a Personal Access Token (PAT):
  1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Generate new token with "repo" permissions
  3. Copy the token and use it as your password when prompted

### Remote Already Exists
If you get "remote origin already exists":
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/team-name_event-management-system.git
```

### Push Rejected
If push is rejected:
```powershell
git pull origin master --allow-unrelated-histories
git push -u origin master
```

## Verification Checklist

✅ GitHub repository is created and public  
✅ All files are visible in the repository  
✅ Three commits are present in the history  
✅ README.md displays correctly on the repository homepage  
✅ Repository link is added to Basecamp  

## Need Help?

If you encounter any issues:
1. Check the GitHub documentation: [https://docs.github.com](https://docs.github.com)
2. Verify you're using the correct repository URL
3. Ensure your internet connection is stable
4. Contact your instructor or TA for assistance

---

**Important Notes:**
- Make sure the repository is set to **PUBLIC**
- The repository name should include your team name
- All three commits must be visible in the history
- The README.md should be comprehensive and informative

Good luck with your submission! 🚀
