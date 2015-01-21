#!/bin/sh

echo 'Switching to master and setting identity for git'
git checkout master
git config user.name $GIT_NAME
git config user.email $GIT_EMAIL
git config credential.helper "store --file=.git/credentials"
git config remote.origin.url https://github.com/vilmosioo/magma.git
echo "https://${GITHUB_TOKEN}:@github.com" > .git/credentials

echo 'Patching version...'
grunt bump-only:patch

echo 'Running build command'
grunt -v || { echo 'Client build failed' ; exit 1; }

echo 'Pushing git data to repo...'
grunt bump-commit

exit 0;