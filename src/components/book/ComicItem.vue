<template>
    <li>
        <div class="book-content">
            <router-link :to="bookDetail" @click="scrollToTop">
                <div class="img-box">
                    <img :src="cover" :alt="name" :title="name">
                </div>
            </router-link>
            <div class="book-detail">
                <router-link :to="bookDetail" @click="scrollToTop">
                    <h4 :title="name">{{ name }}</h4>
                </router-link>
                <p>作者：{{ author }}</p>
                <p>NT$ <span class="price">{{ price }}</span></p>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', 'author', 'cover', 'price'],
    computed: {
        bookDetail() {
            return '/art/' + this.id
        }
    },
    methods: {
        //回到畫面頂端
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
/*書籍卡背景樣式 */
li {
    background-color: whitesmoke;
    list-style: none;
}

/*書籍內容排版 */
.book-content {
    margin: 10px;
}

/*封面框 */
.img-box {
    height: 15rem;
    width: 100%;
}

/*封面 */
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/*書名、作者、價格排版*/
h4,
p {
    margin: 5px 0 5px 0;
    text-align: center;
}


/*超連結樣式*/
a {
    text-decoration: none;
    color: black;
}

/*作者、價錢單位顏色 */
.price {
    font-size: 1rem;
    font-weight: bolder;
    color: red;
}

@media(max-width: 992px) {
    .img-box {
        width: 100%;
        height: 11rem;
    }
}

@media (max-width: 767px) {
    .book-content {
        display: grid;
        grid-template-columns: 30% 70%;
    }

    .book-detail {
        padding: 20px 10px;
    }

    h4 {
        font-size: 1rem;
        margin-bottom: 15px;
    }

    h4,
    p {
        text-align: start;
    }

    p {
        font-size: 12px;
    }
}
</style>