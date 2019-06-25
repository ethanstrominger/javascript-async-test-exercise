test('Verify Async Function', signalEndOfTest => {
  async function testVerifyAsyncFunc() {
    const product = await verifyAsyncFunction();
    expect(product).toBe(24);
    signalEndOfTest();
  }
  testVerifyAsyncFunc();
});
