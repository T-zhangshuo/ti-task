<template>
  <div id="app">
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
  body,
  div {
    margin: 0;
    height: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }
  .content{
    width: 100%;
    height: 100%;
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
