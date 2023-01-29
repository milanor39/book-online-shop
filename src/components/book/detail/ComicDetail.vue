<template>
    <!-- {{ this.$route.params.id }} -->
    <base-card>
        <bread-crumb>
            <template #category>
                <router-link :to="toCategory">
                    <span>{{ bookData.type }}</span>
                </router-link>
            </template>
            <template #place>
                <span>{{ bookData.name }}</span>
            </template>
        </bread-crumb>
        <base-book-card>
            <template #cover>
                <img :src="bookData.cover" :alt="bookData.name">
            </template>
            <template #data>
                <h2>{{ bookData.name }}</h2>
                <p>作者： {{ bookData.author }}</p>
                <p>出版社： {{ bookData.publishingHouse }}</p>
                <p>出版日期： {{ bookData.publicationDate }}</p>
                <p>價格： NT$ <span class="price">{{ bookData.price }}</span></p>
            </template>
            <template #specification>
                <ul>
                    <li>書本樣式： {{ bookData.bookType }}</li>
                    <li>規格： {{ bookData.size }}</li>
                    <li>頁數： {{ bookData.pages }}</li>
                    <li>ISBN： {{ bookData.isbn }}</li>
                </ul>
            </template>
            <template #buy>
                <h3 class="stock"
                    :class="{ 'stock-many': StockInformation === '庫存充裕', 'stock-few': StockInformation === '庫存稀少', 'stock-none': StockInformation === '缺貨中，請等待補貨' }">
                    {{ StockInformation }}</h3>
                <div v-if="!bookData.stock <= 0">
                    <button class="add-cart" @click="addCart"><i class="fa-solid fa-cart-plus"></i>加入購物車</button>
                </div>
                <button @click="addList" :disabled="!getFavorites">
                    {{ getFavorites!== true ? '已加入願望清單' : '加入願望清單'}}</button>
            </template>
            <template #introduce>
                <p v-for="int in bookData.introduce" :key="int" v-html="int"></p>
            </template>
        </base-book-card>
    </base-card>
</template>

<script>
export default {
    methods: {
        //加入最愛
        addList() {
            if (this.isLoggedIn === false) {
                this.$router.push('/login')
            } else {
                this.$store.dispatch('addList', {
                    id: this.bookData.id,
                    engType: this.bookData.engType,
                    name: this.bookData.name,
                    cover: this.bookData.cover,
                    price: this.bookData.price,
                    stock: this.bookData.stock
                })
            }
        },
        //加入購物車
        addCart() {
            if (this.isLoggedIn === false) {
                this.$router.push('/login')
            } else {
                this.$store.dispatch('cart/addBookToCart', {
                    id: this.bookData.id,
                    name: this.bookData.name,
                    cover: this.bookData.cover,
                    price: this.bookData.price,
                    stock: this.bookData.stock
                })
                this.$store.dispatch('books/stockControl', { id: this.bookData.id })
            }
        }
    },
    computed: {
        //檢查登入
        isLoggedIn() {
            return this.$store.getters.logSituation
        },
        //透過id取得書籍資料
        bookData() {
            return this.$store.getters['books/getDetail'](this.$route.params.id)
        },
        //麵包屑路徑
        toCategory() {
            return '/' + this.bookData.engType
        },
        //庫存變換
        StockInformation() {
            if (this.bookData.stock > 20) {
                return '庫存充裕'
            } else if (this.bookData.stock > 0) {
                return '庫存稀少'
            } else {
                return '缺貨中，請等待補貨'
            }
        },
        //比對願望清單
        getFavorites() {
            //沒登入
            if (this.isLoggedIn === false) {
                return true
            }
            //有登入
            else {
                const list = this.$store.getters.favorites;
                if (list !== undefined) {
                    if (list.some(bk => bk.id === this.bookData.id)) return false;
                    else return true;
                } else return true;
            }
        }
    }
}
</script>

<style scoped>
/*麵包屑樣式 */
a {
    color: #0275d8;
    text-decoration: none;
}

/* Add a color on mouse-over */
a:hover {
    color: #01447e;
    text-decoration: underline;
}

/*圖片樣式*/
img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
}

/*規格排版 */
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/*書名標題 */
h2 {
    margin: 0;
}

/*價格樣式 */
.price {
    font-weight: bolder;
    color: red;
}

/*購物鈕控制 */
.stock {
    text-align: center;
}

/*購物按鈕樣式 */
button {
    height: 30px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: 100%;
}

.add-cart {
    color: green;
}

/*庫存樣式 */
.stock-many {
    color: green
}

.stock-few {
    color: orange;
}

.stock-none {
    color: red;
}
</style>