<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <h4 class="text-center">小说id --- {{ id }}</h4>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  methods: {
    getList() {
     axios({
        method: 'get',
        url: '...',
        params: this.id
      })
      .then(res=>{                    //请求成功后执行函数
        if(res.data.code === 0){
          //定义从后端获取的joblist
          var res = res.data.data
          this.List = res
          
          console.log("获取成功")
        }else{
          console.log("获取失败")
        }
      })
      .catch(err=>{                   //请求错误后执行函
        console.log("请求错误")
        alert('网上找不到合适的接口了...')
      })
    },
  },
  mounted() {
    this.getList()
  },
}
</script>

<style lang="less" scoped></style>