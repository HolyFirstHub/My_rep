<template>
    <div class="body">
        <div class="box">
            <div class="cover">

            </div>
            <div class="cover" style="z-index: 10000;background-color: red;border-radius: 999px;">

            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Forth',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.body {
    position: relative;
    height: 101vh;
    width: 101vw;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    height: 60vh;
    width: 20vw;
    background: pink;
    z-index: 1;
    border-bottom-left-radius: 1000px;
    border-bottom-right-radius: 1000px;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    display: flex;
    justify-content: center;


}

.cover {
    position: absolute;
    width: 5vw;
    height: 10vh;
    background: blue;
    z-index: 10000;
}
</style>