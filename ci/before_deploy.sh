#!/bin/sh

git rm -r grunt
git rm -r ci
git rm .gitignore
git rm Gruntfile.js
git add dist
git add app
git commit -m "Saving artefacts"

echo "Done"