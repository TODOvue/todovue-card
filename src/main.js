import { createApp } from 'vue'
import './style.css'
import TvCard from './demo/Demo.vue'
import 'github-markdown-css';
import '../src/assets/scss/style.scss'
import '../src/assets/scss/_global.scss'
createApp(TvCard).mount('#tv-card')
