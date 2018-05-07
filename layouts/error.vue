<template>
  <div>
      <h2 v-if="error.statusCode == 404">自定义404页面</h2>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>
