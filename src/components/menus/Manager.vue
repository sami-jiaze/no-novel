<template>
  <div>
    <articleinfo v-for="item in artlist" :key="item.art_id" :id="item.art_id" :title="item.title" :author='item.aut_name' :cover="item.cover" :cmtcount='item.comm_count' :arttime='item.pubdate'>
      <el-button @click.native.prevent="deleteBook()" 
      type="info" class="del">移除
      </el-button>
    </articleinfo>
    <el-button @click="loadmore">加载更多</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import articleinfo from '@/components/menus/articleinfo.vue'
import { getarticleapi } from '@/api/article.js'
export default {
  name: 'MyUser',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      artlist: [],
      filePath: ''
    }
  },
  created() {
    this.initarticle()
  },
  methods: {
    deleteBook(id) {
      this.$confirm('此操作将永久删除该书籍, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          axios.post('...', { id: id }).then(res => {
            if (res && res.data.code === 200) {
              this.initarticle()
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    async initarticle() {
      const { data: res } = await getarticleapi(this.page, this.limit)
      this.artlist = res
      console.log(res)
      if (res.length === 0) {
        alert('小说以全部加载完毕...')
      }
    },
    loadmore(){
      this.page++
      this.initarticle()
    }
  },
  components: {
    articleinfo
  }
}
</script>

<style lang="less" scoped>
.del{
  margin-left: 50px;
}
</style>
