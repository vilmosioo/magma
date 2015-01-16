#!/bin/sh

mv -i app/scripts/controllers/Search_controller.js dist
git rm -r app
git rm -r grunt
git rm -r ci
git rm .gitignore
git rm Gruntfile.js
git add dist
git commit -m "Saving artefacts"

echo "Done"