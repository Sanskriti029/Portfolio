# Basic Git Commands

A quick reference guide for common Git commands used with GitHub projects.

---

# Setup

## Check Git Version

```bash
git --version
```

## Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

# Create a Repository

## Initialize Git

```bash
git init
```

## Connect Local Project to GitHub

```bash
git remote add origin https://github.com/USERNAME/REPO.git
```

---

# Save Changes

## Check Project Status

```bash
git status
```

## Add All Files

```bash
git add .
```

## Add a Single File

```bash
git add index.html
```

## Commit Changes

```bash
git commit -m "Added homepage"
```

---

# Push Code to GitHub

## First Push

```bash
git branch -M main
git push -u origin main
```

## Push Future Updates

```bash
git push
```

---

# Get Latest Changes

## Pull Latest Updates

```bash
git pull
```

## Clone Existing Repository

```bash
git clone https://github.com/USERNAME/REPO.git
```

---

# Branch Commands

## Create a New Branch

```bash
git checkout -b new-feature
```

## Switch Branches

```bash
git checkout main
```

## Merge Branches

```bash
git merge new-feature
```

---

# View Commit History

## Full Log

```bash
git log
```

## Short Log

```bash
git log --oneline
```

---

# Undo Changes

## Unstage Files

```bash
git reset
```

## Discard Changes in a File

```bash
git checkout -- style.css
```

---

# Everyday Workflow

```bash
git status
git add .
git commit -m "updated project"
git push
```

---

# Helpful Links

- Git Docs: https://git-scm.com/doc
- GitHub Docs: h