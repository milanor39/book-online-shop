<template>
    <h2>新書上市</h2>
    <div class="block">
        <ul>
            <li>
                <slot name="newLit"></slot>
            </li>
            <li>
                <slot name="newBusiness"></slot>
            </li>
            <li>
                <slot name="newArt"></slot>
            </li>
            <li>
                <slot name="newHumanities"></slot>
            </li>
            <li>
                <slot name="newTravel"></slot>
            </li>
            <li>
                <slot name="newComic"></slot>
            </li>
        </ul>
    </div>
    <h2>暢銷排行</h2>
    <div class="block">
        <ul>
            <li>
                <slot name="hotLit"></slot>
            </li>
            <li>
                <slot name="hotBusiness"></slot>
            </li>
            <li>
                <slot name="hotArt"></slot>
            </li>
            <li>
                <slot name="hotHumanities"></slot>
            </li>
            <li>
                <slot name="hotTravel"></slot>
            </li>
            <li>
                <slot name="hotComic"></slot>
            </li>
        </ul>
    </div>
    <h2>編輯推薦</h2>
    <div class="block">
        <ul>
            <li>
                <slot name="recommendLit"></slot>
            </li>
            <li>
                <slot name="recommendBusiness"></slot>
            </li>
            <li>
                <slot name="recommendArt"></slot>
            </li>
            <li>
                <slot name="recommendHumanities"></slot>
            </li>
            <li>
                <slot name="recommendTravel"></slot>
            </li>
            <li>
                <slot name="recommendComic"></slot>
            </li>
        </ul>
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 0;
}

.block {
    width: 100%;
    margin-bottom: 20px;
    border-top: solid 5px;
    border-color: var(--main-color);
}

.block ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.block li {
    display: block;
}

@media(max-width: 768px) {
    .block ul {
        grid-template-columns: 1fr 1fr;
    }
}
</style>