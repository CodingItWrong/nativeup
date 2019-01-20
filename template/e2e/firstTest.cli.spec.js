describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome message', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
