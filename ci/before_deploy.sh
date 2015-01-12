
echo 'Pre-deploy clean up'

git rm -r app
git rm -r grunt
git rm -r ci
git rm .gitignore
git rm Gruntfile.js
git add -r dist
git commit -m "Saving artefacts"

echo "Done"