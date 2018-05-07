<template>
  <div>
      <h2>About index page</h2>
        <ul>
            <nuxt-link :to="{name: 'index'}">home</nuxt-link>
        </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: this.$route.params.title
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',  //根据nuxt.config.js中的值hid来覆盖
          content: 'content 覆盖'
        }
      ]
    }
  }
}
</script>
