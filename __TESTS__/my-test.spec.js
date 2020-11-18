test('should open a browser', async () => {
  const page = await global.__BROWSER__.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain')
})