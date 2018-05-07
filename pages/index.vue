<template>
  <section class="container">
    <div class="contents">
      </div>
      <!-- <div>
        <app-logo/>
        <h1 class="title">
          nuxt-demo
        </h1>
        <h2 class="subtitle">
          Nuxt.js project
        </h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        </div>
      </div>
      <div>
      </div> -->
      <img src="~static/logo.jpg" alt="">
      <ul>
        <li>
          <nuxt-link :to="{name: 'index'}">home</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'about', params: {title: 'about'}}">about</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'news', params: {newsId: '123'}}">news</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'news-asyncData'}">asyncData</nuxt-link>
        </li>
      </ul>
    
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  
  export default {
    components: {
      AppLogo
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .contents {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background:url('~/static/logo.jpg') no-repeat;
    background-size: contain;
  }
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  
  .links {
    padding-top: 15px;
  }
</style>
