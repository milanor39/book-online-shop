<template>
    <footer>
        <div class="footer-content">
            <base-card>
                <div class="logo">
                    <h3>SHIRANAMI</h3>
                    <h5>白波書店</h5>
                </div>
                <div class="site-map">
                    <ul>
                        <li><router-link to="/"> 關於白波書店 </router-link></li> |
                        <li><router-link to="/"> 經營理念 </router-link></li> |
                        <li><router-link to="/"> 人才招募 </router-link></li> |
                        <li><router-link to="/"> 企業合作 </router-link></li> |
                        <li><router-link to="/"> 常見問題 </router-link></li> |
                        <li><router-link to="/"> 隱私權政策 </router-link></li> |
                    </ul>
                </div>
                <p><small>Copyright &copy; SHIRANAMI COMPANY LTD.</small></p>
            </base-card>
        </div>
    </footer>
</template>

<style scoped>
/*footer整體 */

.footer-content {
    background-color: var(--main-color);
    padding: 20px;
}

/*logo */
.logo {
    display: flex;
    flex-direction: column;
    color: whitesmoke;
    text-align: center;
    margin: 20px 0;
}

.logo h3 {
    font-size: 2em;
    margin: 0;
}

.logo h5 {
    font-family: 'Noto Serif TC', serif;
    margin: 0;
    letter-spacing: 1rem;
}

/*網站地圖 */
.site-map ul {
    list-style: none;
    padding: 0;
    color: white;
    display: flex;
    justify-content: center;
    margin: 10px;
}

.site-map li {
    padding: 0 15px;
}

.site-map a {
    text-decoration: none;
    color: whitesmoke;
    border-bottom: solid 1px;
    border-color: var(--main-color);
}

.site-map a:active,
.site-map a:hover {
    border-color: whitesmoke;
}

/*版權宣告 */
p {
    margin: 0;
    text-align: center;
    color: white;
}

@media (max-width: 767px) {
    .site-map {
        display: none;
    }
}
</style>