import verifyFunction from '../verifyFunction';
test('Verify function can be called', () => {
  expect(verifyFunction()).toBe('VERIFIED');
});
