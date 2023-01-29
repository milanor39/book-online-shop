export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    actions: {
        addBookToCart(context, payload) {
            context.commit('addBookToCart', payload)
        },
        removeProductFromCart(context, payload) {
            context.commit('removeProductFromCart', payload)
        },
        sendOrder(context) {
            context.commit('sendOrder')
        }
    },
    mutations: {
        addBookToCart(state, payload) {
            const bookData = payload;
            const bookInCartIndex = state.items.findIndex(book => book.bookId === bookData.id);

            //檢查購物車是否有同名書
            if (bookInCartIndex >= 0) {
                state.items[bookInCartIndex].qty++;
            } else {
                const newItem = {
                    bookId: bookData.id,
                    name: bookData.name,
                    cover: bookData.cover,
                    price: bookData.price,
                    qty: 1
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += bookData.price;
        },
        removeProductFromCart(state, payload) {
            const bookId = payload.id;
            const bookInCartIndex = state.items.findIndex(item => item.id === bookId);
            const bookData = state.items[bookInCartIndex];
            state.items.splice(bookInCartIndex, 1);
            state.qty -= bookData.qty;
            state.total -= bookData.price * bookData.qty;
        },
        sendOrder(state) {
            state.items = [];
            state.total = 0;
            state.qty = 0
        }
    },
    getters: {
        qtyInCart(state) {
            return state.qty
        },
        totalInCart(state) {
            return state.total
        },
        itemInCart(state) {
            return state.items
        }
    }
}