import verifyAsyncFunction from '../verifyAsyncFunction';

test('Verify Async Function', signalEndOfTest => {
  async function testVerifyAsyncFunc() {
    const product = await verifyAsyncFunction();
    expect(product).toBe('ASYNC VERIFIED');
    signalEndOfTest();
  }
  testVerifyAsyncFunc();
});
