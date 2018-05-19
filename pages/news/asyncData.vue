<template>
  <div>
      <p>test</p>
      <p>{{$store.state.info}}</p>
      <p>姓名：{{$store.state.info.name}}</p>
      <p>年龄：{{$store.state.info.age}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: "asyncData"
    };
  },
  //   asyncData() {  //函数中的返回值会放入到data中
  //       return axios.get('https://api.myjson.com/bins/102zw2')
  //       .then( (res) => {
  //           return {info: res.data}  //动态创建data中的info值
  //       })
  //   }
//   async asyncData() {
//     let { data } = await axios.get(
//       "https://easy-mock.com/mock/5affc463c20d695226bef9d7/example/restful/:id/list"
//     );
//     return { info: data.data[0].user };
//   }

  fetch ({ store, params }) {
    return axios.get('https://easy-mock.com/mock/5affc463c20d695226bef9d7/example/restful/:id/list')
    .then((res) => {
      store.commit('getInfo', res.data.data[0].user)
    })
  }

  // mounted() {
  //   axios.get(
  //     "https://easy-mock.com/mock/5affc463c20d695226bef9d7/example/restful/:id/list"
  //   ).then((res) => {
  //     this.info = res.data[0].user
  //   })
  // }
};
</script>
