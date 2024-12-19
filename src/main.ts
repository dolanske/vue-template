import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the main styling from my library
import '@dolanske/vui/style'

// Import any style overrides
import './style/index.scss'

const app = createApp(App)

// Register plugins in the app
app.use(router)

// Finally, append the entire app the the <div id="app" />
app.mount('#app')
