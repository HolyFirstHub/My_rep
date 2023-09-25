<template>
    <div class="body" :style="bgColor">
        asd
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            bgColor: {
                "--color": 'red',
                "--hover":'black'
            },
        }
    },
}
</script>

<style  scoped>
.body {
    height: 100vh;
    width: 100%;
    background-color: var(--color);
}
.body:hover{
 background-color: var(--hover);
}
</style>