
echo 'Switching to master and setting identity for git'
git checkout master
git config user.name $GIT_NAME
git config user.email $GIT_EMAIL
git config credential.helper "store --file=.git/credentials"
git config remote.origin.url https://github.com/vilmosioo/Sky-Watch.git
echo "https://${GITHUB_TOKEN}:@github.com" > .git/credentials

git rm -r app
git rm -r grunt
git rm -r ci
git rm .gitignore
git rm Gruntfile.js
git add dist
git commit -m "Saving artefacts"

echo "Done"