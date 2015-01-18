#!/bin/sh

#echo "export GOOGLE_KEY=$GOOGLE_KEY" > .openshift/action_hooks/build && chmod +x .openshift/action_hooks/build
git rm -r app
git rm -r grunt
git rm -r ci
git rm .gitignore
git rm Gruntfile.js
git add dist
#git add .openshift
git commit -m "Saving artefacts"

echo "Done"