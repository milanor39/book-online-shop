<template>
    <nav>
        <ul class="breadcrumb">
            <li>
                <router-link to="/">首頁</router-link>
            </li>
            <li>
                <slot name="category"></slot>
            </li>
            <li>
                <slot name="place"></slot>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
/* Style the list */
ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    margin: 0;
}

/* Display list items side by side */
ul.breadcrumb li {
    display: inline;
    font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
    color: #0275d8;
    text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
    color: #01447e;
    text-decoration: underline;
}
</style>