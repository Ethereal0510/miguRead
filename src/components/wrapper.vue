<template>
  <div class="fixed-wrapper">
    <div class="wrapper-hover">
      <div class="icon-box">
        <img src="../assets/wrapper/wrapperHover1before.png" alt="" class="default-img">
        <img src="../assets/wrapper/wrapperHover1after.png" alt="" class="active-img">
      </div>
      <span>帮助中心</span>
    </div>

    <div class="wrapper-hover">
      <div class="icon-box">
        <img src="../assets/wrapper/wrapperHover2before.png" alt="" class="default-img">
        <img src="../assets/wrapper/wrapperHover2after.png" alt="" class="active-img">
      </div>
      <span>在线客服</span>
    </div>

    <div class="wrapper-hover">
      <div class="icon-box">
        <img src="../assets/wrapper/wrapperHover3before.png" alt="" class="default-img">
        <img src="../assets/wrapper//wrapperHover3after.png" alt="" class="active-img">
      </div>
      <span>联系编辑</span>
    </div>

    <div class="wrapper-hover" id="Code2D" @mouseenter="showCode2D" @mouseleave="noShowCode2D">
      <div class="icon-box">
        <img src="../assets/wrapper/wrapperHover4before.png" alt="" class="default-img">
        <img src="../assets/wrapper/wrapperHover4after.png" alt="" class="active-img">
      </div>
      <span>公众号</span>
    </div>
  </div>
  <img src="../assets/wrapper/code2D.png" alt="" class="code2D" v-show="isCode2D">
</template>

<script setup lang="ts" name="wrapper">
  import { onMounted, ref } from 'vue';

  let isCode2D = ref(false)

  function showCode2D() {
    isCode2D.value = true
  }

  function noShowCode2D() {
    isCode2D.value = false
  }


</script>

<style scoped>
  .fixed-wrapper {
    position: fixed;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    z-index: 9999;
    background-color: white;
    border-radius: 15px;
  }

  .wrapper-hover {
    display: flex;
    flex-direction: column;
    /* 图标在上，文字在下 */
    justify-content: center;
    /* 上下居中 */
    align-items: center;
    /* 左右居中 */
    margin: 5px 5px;
    border-radius: 5px;
    height: 64px;
    width: 64px;
    gap: 6px;
    /* 图标和文字间距 */
  }

  .icon-box {
    position: relative;
    width: 24px;
    height: 24px;
  }

  .icon-box img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .wrapper-hover span {
    font-size: 12px;
    text-align: center;
  }

  .default-img {
    opacity: 1;
  }

  .active-img {
    opacity: 0;
  }

  .wrapper-hover:hover {
    background-color: rgba(0, 0, 0, 0.01);
    cursor: pointer;
  }

  /* 悬停切换图片 */
  .wrapper-hover:hover .default-img {
    opacity: 0;
  }

  .wrapper-hover:hover .active-img {
    opacity: 1;
  }

  /* 悬停文字高亮 */
  .wrapper-hover:hover span {
    color: #CEAF70;
  }

  .code2D {
    position: fixed;
    top: 60%;
    transform: translateY(-50%);
    right: 105px;
  }
</style>
