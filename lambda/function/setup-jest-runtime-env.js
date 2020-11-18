const chromium = require('chrome-aws-lambda');

beforeAll(async () => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
  global.__BROWSER__ = browser;
});

afterAll(async () => {
    await global.__BROWSER__.close();
});