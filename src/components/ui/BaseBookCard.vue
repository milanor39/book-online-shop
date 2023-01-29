<template>
    <div class="book-card">
        <div class="book-data">
            <div>
                <div class="img-box border-style">
                    <slot name="cover"></slot>
                </div>
            </div>
            <div class="detail">
                <div class="data">
                    <slot name="data"></slot>
                </div>
                <hr>
                <div class="specifacation">
                    <slot name="specification"></slot>
                </div>
            </div>
            <div class="buy border-style">
                <slot name="buy"></slot>
            </div>
        </div>
        <div class="introduce  border-style">
            <h3>內容介紹</h3>
            <slot name="introduce"></slot>
        </div>
    </div>
</template>

<style scoped>
/*書籍排版 */
.book-card {
    padding: 20px;
}

.book-data {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    margin-bottom: 40px;
}

/*邊框樣式 */
.border-style {
    border: solid 5px;
    border-color: antiquewhite;
    border-radius: 5px;
}

/*封面 */
.img-box {
    width: 100%;
    display: flex;
    align-items: center;
}

/*書籍資訊 */
.detail {
    padding: 0 40px;
    height: 100%;
}

/*作者、出版社、出版日期、價格樣式 */
.data {
    height: 65%;
}

/*購買選項樣式 */
.buy {
    display: flex;
    flex-direction: column;
    height: 50%;
    padding: 0 15px;
}

/*內容簡介樣式 */
.introduce {
    padding: 20px;
}

@media (max-width: 767px) {
    .book-data {
        display: block;
    }

    .detail {
        padding: 20px 0;
    }
}
</style>