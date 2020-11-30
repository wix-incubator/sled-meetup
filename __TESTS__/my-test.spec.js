test('should pass on remote', () => {
  expect('🛷').toBe('🛷')
})

test('should fail on remote', () => {
  expect('🦄').toBe('🛷')
})