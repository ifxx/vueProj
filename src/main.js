import { createApp } from 'vue'
import MarkdownIt from 'markdown-it';
import VueMarkdownIt from 'vue3-markdown-it';
import App from './App.vue'

const md = new MarkdownIt();

const app = createApp(App)
app.use(VueMarkdownIt, { md });
app.mount('#app')
