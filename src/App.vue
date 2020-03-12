<template>
    <div id="app">
        <!--    标记可以滑动的区域-->
        <div class="titlebar win-drag"/>
        <router-view/>
    </div>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style>
    html,
    body
    {
        margin: 0;
        height: 100%;
    }


    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .titlebar {
        position: fixed;
        top: 0;
        height: 20px;
        width: 100%;
    }

    .content {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }
    .full-h{
        height: 100%;
    }
    .full-w{
        width: 100%;
    }

    .win-drag {
        -webkit-app-region: drag;
    }

    .win-no-drag {
        -webkit-app-region: no-drag;
    }

    html {
        overflow-y: hidden;
    }

    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar {
        width: 2px; /*滚动条宽度*/
        /*height: 2px;  !*滚动条高度*!*/
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        /*border-radius: 10px;  !*滚动条的背景区域的圆角*!*/
        /*background-color: red;!*滚动条的背景颜色*!*/
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 99px; /*滚动条的圆角*/
        /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
        /*background-color: green;  !*滚动条的背景颜色*!*/
    }
</style>
