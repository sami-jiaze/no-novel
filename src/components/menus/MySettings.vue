<template>
  <div>
    <el-button class="text-center" type="primary" @click="getList">查看我的收藏</el-button>
    <el-button class="text-center" type="primary" @click="clear">清空我的收藏</el-button>
    <div>{{List}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '@/bus.js'
import articleinfo from '@/components/menus/articleinfo.vue'
export default {
  name: 'MySettings',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      List: [],
      flag: false
    }
  },
  methods: {
    clear() {
      this.List = []
      //请求后端数据库清空列表
      axios({
        method: 'get',
        url: '...',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: 'Bearer ' + this.token
        }
      })
        .then(res => {
          if (res.data.code === 0) {
            console.log('清空成功')
          } else {
            console.log('清空失败')
          }
        })
        .catch(err => {
          //请求错误后执行函
          console.log('请求错误')
        })
    },
    getList() {
      axios({
        method: 'get',
        url: '...',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: 'Bearer ' + this.token
        }
      })
        .then(res => {
          if (res.data.code === 0) {
            var res = res.data.data
            this.List = res
            console.log('获取成功')
          } else {
            console.log('获取失败')
          }
        })
        .catch(err => {
          console.log('请求错误')
        })
    }
  },
  created() {
    // bus.$on('collect', data => {
    //   this.collectNovel = data
    //   alert('收到' + this.collectNovel)
    // })
     this.token =  localStorage.getItem('token')
  },
  components: {
    articleinfo
  }
}
</script>

<style lang="less" scoped>
</style>