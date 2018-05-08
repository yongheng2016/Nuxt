<template>
  <div>
      <h2>news contents</h2>
      <p>newsId: {{$route.params.id}}</p>
      <ul>
          <li><nuxt-link :to="{name: 'index'}"></nuxt-link></li>
      </ul>
  </div>
</template>
<script>
export default {  //校验动态路由参数的有效性。 404页
  validate({params}) {
      console.log(params)
      return /^\d+$/.test(params.id)
  }
}
</script>
