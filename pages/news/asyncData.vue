<template>
  <div>
      <p>asyncData</p>
      <p>姓名：{{info.name}}</p>
      <p>年龄：{{info.age}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
      return {
          name: 'asyncData'
      }
  },
//   asyncData() {  //函数中的返回值会放入到data中
//       return axios.get('https://api.myjson.com/bins/102zw2')
//       .then( (res) => {
//           return {info: res.data}  //动态创建data中的info值
//       })
//   }
async asyncData() {
    let {data} = await axios.get('https://api.myjson.com/bins/102zw2')
    return {info: data}
}
}
</script>
