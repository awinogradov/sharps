if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo "gh-pages is updating..."

    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "Travis"
    
    bower cache clean
    bower-npm-install

    bem make -m clean && YENV=production bem make

    git clone -b gh-pages https://${GH_TOKEN}@github.com/voischev/bem-social.git gh-pages

    cd gh-pages

    cp ../desktop.bundles/index/index.html index.html
    cp ../desktop.bundles/index/_index.js _index.js
    cp ../desktop.bundles/index/_index.css _index.css

    git add -A
    git commit -m "Travis build $TRAVIS_BUILD_NUMBER has been pushed to gh-pages"
    git push origin gh-pages
    cd ..
    rm -rf gh-pages

    echo "gh-pages has been updated successfully"
fi
