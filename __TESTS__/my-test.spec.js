test('should pass', async () => {
  expect('🛷').toBe('🛷')
})

test('should fail', async () => {
  expect('🦄').toBe('🛷')
})