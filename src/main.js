import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret  } from '@fortawesome/free-solid-svg-icons'
import router from './router'

library.add(faUserSecret)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
