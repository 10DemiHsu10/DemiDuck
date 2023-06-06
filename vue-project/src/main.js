import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
})

store.commit('increment');
store.commit('increment');
// console.log(store.state.count)

const app = createApp(App);
app.use(store);
app.mount('#app');