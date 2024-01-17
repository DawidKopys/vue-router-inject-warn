import { createApp } from 'vue'
import App from './App.vue'
import { routerWithApp  } from './router'

const app = createApp(App)

app.provide('foo', 'foo')

app.use(routerWithApp)

app.mount('#app')
