import { test as baseTest } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, './user.json');

export * from '@playwright/test';
export const test = baseTest.extend<{}, { workerStorageState: string }>({
  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: [
    async ({ browser }, use) => {
      // Use parallelIndex as a unique identifier for each worker.
      const id = test.info().parallelIndex;
      const fileName = path.resolve(
        test.info().project.outputDir,
        `.auth/${id}.json`
      );

      const userEmail = 'elevatplaywright@gmail.com';
      const userPwd = 'playwright123!';
      
      const page = await browser.newPage({
        storageState: undefined,
      });
      await page.goto('http://localhost:8000');
      console.log('🔐 Attempting login via UI...');
       // Perform login
       await page.fill('#email', userEmail);
       await page.fill('#password', userPwd);
       await page.click('#loginButton');

      await page.waitForTimeout(1000);

      
      await page.context().storageState({ path: fileName, indexedDB: true });
    },
    { scope: 'worker' },
  ],
});
