_pwd=$(pwd)

rm -rf chrome-aws-lambda
git clean -dfx .
git clone --depth=1 https://github.com/alixaxel/chrome-aws-lambda.git
cd chrome-aws-lambda
npm install
brotli --decompress --rm bin/chromium-*.br
npm pack
mkdir -p nodejs/node_modules/chrome-aws-lambda/
tar --directory nodejs/node_modules/chrome-aws-lambda/ --extract --file chrome-aws-lambda-*.tgz --strip-components=1
rm chrome-aws-lambda-*.tgz
npm install puppeteer-core --no-bin-links --no-optional --no-package-lock --no-save --no-shrinkwrap --prefix nodejs/
npm install jest --no-bin-links --no-optional --no-package-lock --no-save --no-shrinkwrap --prefix nodejs/
zip -9 --filesync --move --recurse-paths _/chrome-aws-lambda.zip nodejs/

#cleanup
cd $_pwd
cp chrome-aws-lambda/_/chrome-aws-lambda.zip .