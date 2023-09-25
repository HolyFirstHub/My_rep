<template>
    <div class="body">
        <ul>
            <li>
                <el-button type="text" icon="el-icon-s-platform"></el-button>
            </li>
            <li>
                <el-button type="text" icon="el-icon-setting"></el-button>
            </li>
            <li>
                <el-button type="text" icon="el-icon-s-help"></el-button>
            </li>
            <li>
                <el-button type="text" icon="el-icon-s-promotion"></el-button>
            </li>
            <!-- <div id="maker"></div> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Third',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.body {
    height: 101vh;
    width: 101vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(93, 32, 224);

}

ul {
    position: relative;
    display: flex;
    height: 20vh;
    width: 50vw;
    box-shadow:
        1px 4px 10px rgb(93, 32, 224),
        2px 5px 20px rgb(83, 30, 199),
        3px 6px 30px rgb(66, 23, 160),
        4px 7px 40px rgb(57, 20, 137);
    text-align: center;

}

ul li {
    height: 10vh;
    width: 10vw;
    position: relative;
    display: inline-block;
    text-decoration: none;
    line-height: 20vh;
    margin-right: 1vw;
    margin-top: 1vh;
    z-index: 10000;

}

ul li .el-button {
    font-size: 4em;
    opacity: 0.5;
    backdrop-filter: blur(30px);
}

ul li .el-button:hover {
    opacity: 1;
    text-shadow:
        1px 4px 10px rgb(93, 32, 224),
        2px 5px 20px rgb(83, 30, 199),
        3px 6px 30px rgb(66, 23, 160),
        4px 7px 40px rgb(57, 20, 137);
    ;
}

/* #maker {
    position: absolute;
    top: 1vh;
    transition: 0.5s;
    z-index: 1;
}

#maker::before {
    content: '';
    position: absolute;
    top: 1vh;
    left: 50%;
    transform: translateX(-50%);
    width: 10vw;
    height: 15vh;
    border-radius: 10px;
    background: rgb(45, 204, 225);
    box-shadow:
        1px 4px 30px rgb(35, 199, 221),
        2px 5px 40px rgb(37, 136, 223),
        3px 6px 50px rgb(37, 191, 221),
        4px 7px 60px rgb(43, 186, 225);
} */
</style>