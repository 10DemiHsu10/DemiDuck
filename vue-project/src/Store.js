import { createStore } from 'vuex';
import { INCREMENT } from './consts/mutationTypes.js';

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
        getItemsByExpensive: (state) => (amount) => {
            return state.accountingItems.filter(item => item.amount > amount);
        }
    },
    
    mutations: {
      [INCREMENT] (state) {
        state.count++
      }
    }
})

store.commit(INCREMENT);

export default store;