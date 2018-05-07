<template>
  <div>
      <h2>About index page</h2>
        <ul>
            <li>{{$route.params.newsId}}</li>
            <li><nuxt-link :to="{name: 'index'}">home</nuxt-link></li>
            <li><nuxt-link :to="{name: 'news-id', params: {id: 123}}">news1</nuxt-link></li>
            <li><nuxt-link :to="{name: 'news-id', params: {id: 456}}">news2</nuxt-link></li>
        </ul>
  </div>
</template>
<script>
export default {
  transition: 'test'
}
</script>
