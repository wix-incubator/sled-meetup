test('should pass on remote', async () => {
  expect('🛷').toBe('🛷')
})

test('should fail on remote', async () => {
  expect('🦄').toBe('🛷')
})