<template>
<div>
    <h2>测试动态获取数据</h2>
    <p>userInfo: {{userInfo}}</p>
    <p>{{userInfo.name}}</p>
    <p>{{userInfo.age}}</p>
    <img :src="image" alt="">
    <p>测试缓存5555555555555</p>
</div>

</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            userInfo: {},
            image: ''
        }
    },
    mounted() {
        axios.get('https://easy-mock.com/mock/5affc463c20d695226bef9d7/example/restful/:id/list').then((res) => {
            this.userInfo = res.data.data[0].user
        })
        this.$nextTick().then(()=> {
            this.image = 'https://dummyimage.com/600x400/852085/fff'
        })
    }
}
</script>
