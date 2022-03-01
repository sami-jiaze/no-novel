<template>
  <div>
    <articleinfo v-for="item in artlist" :key="item.art_id" :id="item.art_id" :title="item.title" :author='item.aut_name' :cover="item.cover" :cmtcount='item.comm_count' :arttime='item.pubdate'>
      <!-- <a href="#" class="more" @click.prevent="gotoDetail(item.art_id)">查看原文</a> -->
      <!-- <a href="#" class="downloadNovels" @click="downloadNovel">下载此小说</a> -->
      <el-button @click.prevent="gotoDetail(item.art_id)" type="primary" size="small">查看原文</el-button>
      <el-button @click="downloadNovel" type="success" size="small">下载此小说</el-button>
      <el-button type="warning" size="small" @click="collect(item.id)">收藏此小说</el-button>
    </articleinfo>
    <!-- <button @click="onLoad">当前页数{{page}} 加载更多</button> -->
    <el-pagination layout="prev, pager, next" :total="80" :current-page="1" @next-click="onLoadAdd" @prev-click="onLoadSub" @current-change="onLoadChg">
    </el-pagination>

  </div>
</template>

<script>
import axios from 'axios'
import articleinfo from '@/components/menus/articleinfo.vue'
import { getarticleapi } from '@/api/article.js'
import bus from '@/bus.js'
export default {
  name: 'MyNovel',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      artlist: [],
      filePath: '',
      likelist: [],
      ifCollect: false
    }
  },
  created() {
    this.initarticle()
  },
  methods: {
    // 封装获取文章列表数据
    async initarticle() {
      const { data: res } = await getarticleapi(this.page, this.limit)
      // const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      // if (res.status === 200) {
      //   this.artlist = res.list
      // }
      this.artlist = res
      // this.artlist = [...this.artlist, ...res]
      console.log(res)
      if (res.length === 0) {
        alert('小说以全部加载完毕...')
      }
    },
    onLoadAdd() {
      this.page++
      this.initarticle()
    },
    onLoadSub() {
      if (this.page > 1) {
        this.page--
      }
      this.initarticle()
    },
    onLoadChg(val) {
      this.page = `${val}`
      this.initarticle()
    },
    gotoDetail(id) {
      this.$router.push('/home/MyNovel/' + id)
    },
    downloadNovel(scope) {
      axios({
        method: 'post',
        url: 'http:www.xxx.com/api/download',
        data: {},
        responseType: 'arraybuffer'
      })
        .then(res => {
          console.log(scope)
          window.location.href = res.data.datas.fileUrl
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // collect(id) {
    //   // bus.$emit('collect', item)
    //   // alert('收藏'+item);
    //   axios({
    //     method: 'get',
    //     url: '...',
    //     headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       Authorization: 'Bearer ' + this.token
    //     },
    //     params: {
    //       id: id
    //     }
    //   })
    //     .then(res => {
    //       if (res.data.code === 0) {
    //         //把收藏列表放进空数组likelist[]
    //         var res = res.data.data
    //         this.likeList = res
    //         //对获取的收藏列表数组likelist进行遍历，再用if语句看列表里面是否有id跟本页面商品id一样的元素
    //         this.likeList.forEach(item => {
    //           //用if语句看列表里面是否有id跟本页面商品id一样的元素
    //           if (item.id == this.jobId) {
    //             this.ifCollect = true
    //             console.log('已收藏')
    //           }
    //         })
    //       } else {
    //         console.log('err')
    //       }
    //     })
    //     .catch(err => {
    //       console.log('请求错误')
    //     })
    // },
    collect(id) {
      if (this.ifCollect === false) {
        axios({
          method: 'post',
          url: '...',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'Bearer ' + this.token
          },
          params: {
            nid: id
          }
        })
          .then(res => {
            if (res.data.code === 0) {
              this.ifCollect = true
              console.log('收藏成功')
            } else {
              console.log('err')
            }
          })
          .catch(err => {
            //请求错误后执行函
            console.log('请求错误')
          })
      }
    }
  },
  components: {
    articleinfo
  }
}
</script>

<style lang="less" scoped>
.downloadNovels {
  margin-left: 15px;
  margin-right: 15px;
}
</style>