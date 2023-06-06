import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        count: 2,
        accountingItems: [
            {"id": 1, "name": "雞腿便當", "amount": 85},
            {"id": 2, "name": "QQ鮮奶茶", "amount": 65},
            {"id": 3, "name": "油錢", "amount": 1105}
        ]
      }
    },
    getters: {
        getItemsByExpensive(state) {
            return state.accountingItems.filter(item => item.amount > 1000)
        }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
})

store.commit('increment');
//store.commit('increment');
// console.log(store.state.count)

const app = createApp(App);
app.use(store);
app.mount('#app');