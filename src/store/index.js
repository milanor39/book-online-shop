import { createStore } from 'vuex'

import BooksModule from './modules/books/index'
import CartModule from './modules/cart/index'

export default createStore({
  state() {
    return {
      isPasswordValid: false,
      isLoggedIn: false,
      currentUser: null,
      accounts: [
        {
          username: 'acc1',
          password: '1111',
          profile: {
            owner: '尼可拉斯凱吉',
            email: 'test@test.com',
            phone: '0995338807',
            address: '高雄市鼓山區大榮街17號',
          },
          orders: [],
          favorites: []
        }
      ]
    }
  },
  getters: {
    logSituation(state) {
      return state.isLoggedIn
    },
    owner(state) {
      return state.currentUser.profile.owner
    },
    //取得帳號中的訂單
    orders(state) {
      if (state.isLoggedIn) {
        const accInIndex = state.accounts.findIndex(acc => acc.username === state.currentUser.username)
        return state.accounts[accInIndex].orders
      }
    },
    //取得帳號中的願望清單
    favorites(state) {
      if (state.isLoggedIn) {
        const accInIndex = state.accounts.findIndex(acc => acc.username === state.currentUser.username)
        return state.accounts[accInIndex].favorites
      }
    },
    //取得帳號個人資料
    profile(state) {
      const accInIndex = state.accounts.findIndex(acc => acc.username === state.currentUser.username)
      return state.accounts[accInIndex].profile
    },
    //登入失敗
    loginFailure(state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    //註冊
    register(state, newAcc) {
      let isExist = false;
      state.accounts.forEach(acc => {
        if (acc.username === newAcc.username) {
          isExist = true;
        }
      });
      if (!isExist) {
        let formattedNewAcc = {
          username: newAcc.username,
          password: newAcc.password,
          profile: {
            owner: newAcc.profile.owner,
            email: newAcc.profile.email,
            phone: newAcc.profile.phone,
            address: newAcc.profile.address
          },
          favorites: [],
          orders: []
        }
        state.accounts.push(formattedNewAcc);
      }
    },
    //登入
    login(state, { username, password }) {
      const account = this.state.accounts.find(account => {
        return account.username === username && account.password === password
      });
      if (account) {
        state.isLoggedIn = true
        state.currentUser = account
      } else {
        console.log(account)
        state.isPasswordValid = true;
      }
    },
    //登出
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    //結帳
    sendOrder(state, cart) {
      const accInIndex = state.accounts.findIndex(acc => acc.username === state.currentUser.username);
      const newOrder = {
        orderId: new Date().toISOString(),
        product: cart.items,
        total: cart.total
      }
      state.accounts[accInIndex].orders.push(newOrder);
    },
    //加入願望清單
    addList(state, payload) {
      const accInIndex = state.accounts.findIndex(acc => acc.username === state.currentUser.username);
      if (!state.accounts[accInIndex].favorites.some(i => i.id === payload.id)) {
        const newItem = {
          id: payload.id,
          engType: payload.engType,
          name: payload.name,
          cover: payload.cover,
          price: payload.price,
          stock: payload.stock
        };
        state.accounts[accInIndex].favorites.push(newItem);
      } else {
        return
      }
    },
    //儲存資料變更
    saveProfileChange(state, payload) {
      const accInIndex = state.accounts.findIndex(acc => acc.username === state.currentUser.username);
      state.accounts[accInIndex].profile = {
        owner: payload.owner,
        email: payload.email,
        phone: payload.phone,
        address: payload.address
      }
    }
  },
  actions: {
    register(context, newAcc) {
      context.commit('register', newAcc);
    },
    login(context, { username, password }) {
      context.commit('login', { username, password });
    },
    logout(context) {
      context.commit('logout');
    },
    sendOrder(context, cart) {
      context.commit('sendOrder', cart);
    },
    addList(context, payload) {
      context.commit('addList', payload);
    },
    saveProfileChange(context, payload) {
      context.commit('saveProfileChange', payload);
    }
  },
  modules: {
    books: BooksModule,
    cart: CartModule
  }
})
