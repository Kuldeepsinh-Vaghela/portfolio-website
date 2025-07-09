# How to Deploy Your Portfolio to GitHub

Follow these steps to deploy your portfolio website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio-website` or `kuldeepsinh-portfolio`)
4. Make sure it's set to "Public" (required for free GitHub Pages)
5. Click "Create repository"

## Step 2: Upload Your Code

### Option A: Using GitHub Desktop (Easier)
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. In GitHub Desktop, click "Clone a repository from the Internet"
3. Select your newly created repository
4. Copy all your portfolio files into the cloned folder
5. In GitHub Desktop, you'll see your changes
6. Add a commit message like "Initial portfolio website"
7. Click "Commit to main"
8. Click "Push origin"

### Option B: Using Command Line
```bash
# Navigate to your portfolio folder
cd /path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically

## Step 4: Access Your Website

- Your website will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- It may take a few minutes for the first deployment to complete
- You can check the deployment status in the "Actions" tab

## Step 5: Custom Domain (Optional)

If you have a custom domain:
1. In repository settings, go to "Pages"
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS"
4. Add a CNAME record in your domain's DNS settings pointing to `YOUR_USERNAME.github.io`

## Updating Your Website

Whenever you make changes:
1. Upload the updated files to your repository
2. The website will automatically redeploy
3. Changes will be live in a few minutes

## Important Notes

- Make sure your repository is public for free GitHub Pages
- The deployment process is automatic - no manual steps needed
- Your website will be rebuilt every time you push changes
- Check the "Actions" tab if deployment fails

## Need Help?

- Check the "Actions" tab for deployment logs
- Ensure all files are properly uploaded
- Make sure the repository is public
- Contact GitHub support if you encounter issues

Your portfolio website will be live and accessible to anyone with the link!