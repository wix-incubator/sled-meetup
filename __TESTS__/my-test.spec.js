test('should pass', () => {
  expect('🛷').toBe('🛷')
})

test('should fail', () => {
  expect('🦄').toBe('🛷')
})