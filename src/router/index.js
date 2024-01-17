import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { inject } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

// routerWithApp is a plugin that injects the app instance into the router
const routerWithApp = {
  install(app) {
    router.install(app)
    router._app = app
  }
}

router.beforeEach(() => {
  console.group('beforeEach 1 - regular inject(), working as expected')
  const foo = inject('foo')
  console.log('injected foo :', foo)
  console.groupEnd()
})

router.beforeEach(() => {
  console.group('beforeEach 2 - inject() after app.runWithContext, not working')
  const app = router._app
  
  app.runWithContext(() => {
    console.log('runWithContext')
  })

  // currentApp is null because of app.runWithContext above, as a result, we get warning:
  // [Vue warn]: inject() can only be used inside setup() or functional components.
  const foo = inject('foo')
  console.log('injected foo :', foo)
  console.groupEnd()
})

export { routerWithApp }
