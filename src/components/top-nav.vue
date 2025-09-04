<template>
  <div class="top-nav">
    <div class="app-head">
      <img src="../assets/top-title.png" alt="咪咕文学" class="title">
      <div class="nav">
        <ul type:none>
          <li>
            <RouterLink :to="{ path: './home' }" active-class="active-nav">首页</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: './author' }" active-class="active-nav">作家专区</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: './creatorBenefits' }" active-class="active-nav">创作者福利</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: './interactiveCommunity' }" active-class="active-nav">互动社区</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: './Copyright' }" active-class="active-nav">版权中心</RouterLink>
          </li>
        </ul>
      </div>
      <div class="login">
        <ul>
          <li>登录</li>
          <li class="divideLine"></li>
          <li>注册</li>
          <li id="Post">
            <span class="iconfont icon-gangbi">&nbsp;&nbsp;投稿</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="main-content">
    <RouterView />
  </div>
</template>

<script setup lang="ts" name="topNav">
  import { RouterView, RouterLink } from 'vue-router';

</script>

<style scoped>
  .top-nav {
    background-color: white;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .app-head {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: #E5D3B0;
    font-family: '方正手迹';
    font-size: 20px;
    width: 122px;
    height: 28px;
  }

  .nav ul {
    list-style: none;
    display: flex;
  }

  .nav ul li a {
    padding: 17px 5px;
    text-decoration: none;
    color: black;
    margin: 0 22px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
  }

  .nav ul li a:hover {
    font-weight: bolder;
  }

  .nav ul li a:active {
    border-bottom: 1px solid #D2AE67;
  }

  .active-nav {
    font-weight: bolder;
    border-bottom: 4px solid #D2AE67;
  }

  .login ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .login ul li {
    color: grey;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divideLine {
    display: inline-block;
    width: 1px;
    height: 25px;
    background-color: #EDEDED;
    margin: 0 5px;
  }

  .login ul li:hover {
    color: #D2AE67;
  }

  #Post {
    display: inline-block;
    background-color: #CEAF70;
    color: white;
    width: 80px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-left: 20px;
  }

  #Post:hover {
    filter: brightness(1.08) saturate(1.2);
    transition: filter .2s;   /* 顺带加个过渡更柔和（可选） */
  }

  .icon-gangbi{
    font-size: 14px;
  }

  .main-content{
    height: 1000px;
  }
</style>