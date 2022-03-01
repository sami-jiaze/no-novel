<template>
  <div>
    <!-- <el-card> -->
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="搜索小说" v-model="novel.query">
            <el-button slot="append" icon="el-icon-search" @click="initarticle"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <h5>总共有{{searchnum}}条结果</h5>
    <!-- </el-card> -->
    <articleinfo 
    v-for="item in searchlist" 
    :key="item.art_id" 
    :id="item.art_id" 
    :title="item.title" 
    :author='item.aut_name' 
    :cover="item.cover" 
    :cmtcount='item.comm_count' 
    :arttime='item.pubdate'
    >
      <el-button @click.prevent="gotoDetail(item.art_id)" type="primary" size="small">查看原文</el-button>
      <el-button @click="downloadNovel" type="success" size="small">下载此小说</el-button>
      <el-button  type="warning" size="small">收藏此小说</el-button>
    </articleinfo>
    <el-pagination layout="prev, pager, next" :total="searchnum" :current-page='this.novel.page'  @next-click="onLoadAdd" @prev-click="onLoadSub" @current-change="onLoadChg">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';
import articleinfo from '@/components/menus/articleinfo.vue'
export default {
  data() {
    return {
      novel:{
      query: '',
      page: 1
      },
      searchlist:{},
      searchnum: 0
    }
  },
  methods: {
    async initarticle() {
      const { data: res } = await axios.get('http://www.liulongbin.top:8000/v1_0/search',{
        params: {
          q:this.novel.query,
          page:this.novel.page
        }
      })
      this.searchlist = res.data.results
      this.searchnum = res.data.total_count
      console.log(res.data);
    },
    gotoDetail(id){
       this.$router.push('/home/search/' + id)
    },
    onLoadAdd(){
      this.novel.page++
      this.initarticle()
    },
    onLoadSub(){
      if(this.page>1){
      this.novel.page--
      }
      this.initarticle()
    },
    onLoadChg(val){
      this.novel.page= `${val}`
      this.initarticle()
    },
    downloadNovel(scope) {
      axios({
        method: 'post',
        url: 'http:www.xxx.com/api/download',
        data: {  },
        responseType:'arraybuffer'
      })
        .then(res => {
          console.log(scope)
          window.location.href = res.data.datas.fileUrl
        })
        .catch(function (error) {
          console.log(error)
        })
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