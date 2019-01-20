const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome message', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
