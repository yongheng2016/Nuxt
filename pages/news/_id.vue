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
export default {
  validate({params}) {
      console.log(params)
      return /^\d+$/.test(params.id)
  }
}
</script>
