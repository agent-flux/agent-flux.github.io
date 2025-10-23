#!/bin/bash

# GitHub Pages Deployment Script
# This script builds the project and copies necessary files to root for GitHub Pages

set -e

echo "Building project..."
npm run build

echo "Copying files to root for GitHub Pages..."
cp dist/public/index.html index.html
cp -r dist/public/assets assets
cp dist/public/favicon.png favicon.png

echo "✓ GitHub Pages files ready!"
echo ""
echo "Files deployed to root:"
echo "  - index.html"
echo "  - 404.html"
echo "  - assets/"
echo "  - favicon.png"
echo "  - .nojekyll"
echo ""
echo "Next steps:"
echo "  1. git add ."
echo "  2. git commit -m 'Deploy to GitHub Pages'"
echo "  3. git push"
