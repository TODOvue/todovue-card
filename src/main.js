import { createApp } from 'vue'
import './style.css'
import TvCard from './demo/Demo.vue'
import "vue-highlight-code/dist/style.css";
import '../src/assets/scss/style.scss'
import '../src/assets/scss/_global.scss'
createApp(TvCard).mount('#tv-card')
