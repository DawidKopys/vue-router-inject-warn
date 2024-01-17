# vue-router-inject-warn

This repo presents how [app.runWithContext()](https://vuejs.org/api/application.html#app-runwithcontext) sets current app instance to `null`, causing `inject()` to fail.

To run this example:
```bash
npm install
npm run dev
```
... and visit http://localhost:5173/. You should see below logs in the browser console:
```
beforeEach 1 - regular inject(), working as expected
  injected foo : foo
beforeEach 2 - inject() after app.runWithContext, not working
  runWithContext
  [Vue warn]: inject() can only be used inside setup() or functional components.
  injected foo : undefined
```
