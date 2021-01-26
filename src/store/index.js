import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [
      {
        name: "Whirlpool Samba avec inverseur de couleur blanc",
        price: 1995.95,
        id: 1,
        quantity: 3,
      },
      {
        name: "Wfsdfsdfsdfsd sdf sdf c",
        price: 199.95,
        id: 2,
        quantity: 4,
      },
    ],
    favorites: [],
  },
  mutations: {
    deleteCart(state, article) {
      state.cart.splice(state.cart.indexOf(article), 1)
    },
    setCart(state, { article, quantity }) {
      let existing = state.cart.find(art => art.id == article.id);

      if (existing && quantity) {
        existing.quantity = quantity;
        return;
      } else if (quantity == 0 || !quantity) {
        if (existing) {
          state.cart.splice(state.cart.indexOf(existing), 1);
        }
        return;
      }

      article.quantity = quantity;
      state.cart.push(article);
    },
    addCart(state, { article, quantity }) {
      let exisiting = state.cart.find(art => art.id == article.id);

      if (exisiting) {
        if (quantity) {
          exisiting.quantity = quantity;
        } else {
          exisiting.quantity++;
        }
        return;
      }

      article.quantity = quantity ?? 1;
      state.cart.push(article);
    },
    toggleFavorite(state, article) {
      let exisitingIndex = state.favorites.indexOf(article);

      if (exisitingIndex != -1) {
        state.favorites.splice(exisitingIndex, 1);

        return;
      }

      state.favorites.push(article);
    },
  },
  actions: {
  },
  modules: {
  }
})
