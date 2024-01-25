import { createStore } from 'vuex'

export default createStore({
  state: { 
      count : 100,
 
  },
  getters: {
    getMessage: state => state.message
  },
  mutations: {
    increment(state){
      state.count++;
    }
  },
  actions: {
    asyncUpdateMessage({ commit }) {
      // Giả mô một hành động không đồng bộ
      setTimeout(() => {
        commit('updateMessage', 'Thông điệp được cập nhật từ Vuex!');
      }, 2000);
    }
  },
  modules: {
  }
})
