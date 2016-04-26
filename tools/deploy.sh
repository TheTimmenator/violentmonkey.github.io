rm -rf dist
npm run predev
cd dist
git init
git add .
git commit -m 'Auto deploy to github-pages'
git push -f git@github.com:violentmonkey/violentmonkey.github.io.git master:master
