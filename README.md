To try out:
```
npm i
npx http-server -p 8000
npx playwright test
```

The error thrown by the tests: 
```
1) [firefox] › tests/auth.spec.ts:6:5 › should display logged in screen ──────────────────────────

    Error: browserContext.storageState: Unable to serialize IndexedDB: constructorImpl is undefined
    collect/<.indexedDB<@debugger eval code line 234 > eval:88:13
    promise callback*collect@debugger eval code line 234 > eval:87:98
    async*@debugger eval code line 234 > eval:91:3
    evaluate@debugger eval code:234:30
    @debugger eval code:1:44

        at collect/<.indexedDB<@debugger eval code line 234 > eval:88:13
        at promise callback*collect@debugger eval code line 234 > eval:87:98
        at async*@debugger eval code line 234 > eval:91:3
        at evaluate@debugger eval code:234:30
        at @debugger eval code:1:44
        at Object.exports.test._test.test.extend.workerStorageState.scope (/Users/rimma/playwright-sandbox/tests/fixtures.ts:37:28)

```
