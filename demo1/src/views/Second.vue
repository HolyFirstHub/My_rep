<template>
    <div class="body">
        <header>
            <a href="#" class="logo">Logo</a>
            <div class="rightSide">
                <div :class="['btns', 'dayNight']" @click="dayNightClick">
                    <el-button type="text" icon="el-icon-sunny"></el-button>
                    <el-button type="text" icon="el-icon-moon"></el-button>
                </div>
                <div :class="['btns', 'menuToggle']" @click="menuToggleClick">
                    <el-button type="text" icon="el-icon-menu"></el-button>
                    <el-button type="text" icon="el-icon-close"></el-button>
                </div>
            </div>
        </header>
        <section class="main" :style="{ background: (bg === true ? '#fff' : ' black') }">
            <video src="../assets/video.mp4" autoplay loop muted type="mp4"></video>
            <img src="../assets/mask.png" class="mask">
            <h2>S k y</h2>
            <p class="copyrightText">@ Holy - 2023</p>
            <ul class="sci">
                <li><el-button type="text" icon="el-icon-shopping-cart-2"></el-button></li>
                <li><el-button type="text" icon="el-icon-chat-round"></el-button></li>
                <li><el-button type="text" icon="el-icon-location"></el-button></li>
            </ul>
        </section>
        <ul class="navigation" :style="{ background: (bg === true ? '#fff' : ' black') }">
            <li><a href="#" class="a-hover">Home</a></li>
            <li><a href="#" class="a-hover">About</a></li>
            <li><a href="#" class="a-hover">Package</a></li>
            <li><a href="#" class="a-hover">Contact</a></li>
        </ul>
    </div>
</template>  
    

<script>
export default {
    name: 'Second',
    components: {
    },
    data() {
        return {
            bg: true

        }
    },
    methods: {
        dayNightClick() {
            document.querySelector('.body').classList.toggle('dark')
            document.querySelector('.dayNight').classList.toggle('active')
            this.bg = !this.bg

        },
        menuToggleClick() {
            document.querySelector('.menuToggle').classList.toggle('active')
            document.querySelector('.navigation').classList.toggle('active')
        }
    },

}


</script>  

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --white: #fff;
    --black: black;
}

.dark {
    --white: black;
    --black: #fff;
}

header {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 40px 100px;
    z-index: 10000;
}

header .logo {
    position: relative;
    display: inline-block;
    color: var(--black);
    text-decoration: none;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.rightSide {
    display: flex;
}

.btns {
    position: relative;
    width: 40px;
    height: 40px;
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
}

.btns .el-button {
    font-size: 2em;
    color: var(--black);
}

.btns.menuToggle .el-button {
    font-size: 3em;
}

.btns .el-button:nth-child(2) {
    display: none;
}

.btns.active .el-button:nth-child(2) {
    display: block;
}

.btns.active .el-button:nth-child(1) {
    display: none;
}

.main {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    user-select: none;
    mix-blend-mode: screen;
}

.dark .mask {
    filter: invert(1);
    mix-blend-mode: multiply;

}

.main h2 {
    position: relative;
    color: var(--white);
    font-size: 6vw;
    text-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    z-index: 3;

}

.navigation {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 4;
    transition: 0.5s;
}

.navigation.active {
    left: 0;
}

.navigation li {
    list-style: none;
}

.a-hover {
    display: inline-flex;
    margin: 5px 0;
    font-size: 1.25em;
    text-decoration: none;
    color: var(--black);
    padding: 5px 20px;
    border-radius: 999em;
    z-index: 5;
}

.a-hover:hover {
    background: rgba(127, 240, 225, 0.801);
    color: var(--white);
}

.copyrightText {
    position: absolute;
    left: 100px;
    bottom: 40px;
    z-index: 4;
    font-weight: 500;
    font-size: 1em;
    color: var(--black);
}

.sci {
    position: absolute;
    right: 100px;
    bottom: 40px;
    z-index: 4;
    display: flex;
    flex-direction: column;
}

.sci li {
    list-style: none;
}

.sci li .el-button {
    text-decoration: none;
    color: var(--black);
    font-size: 1.75em;
}
</style>