<template>
  <div>
    <p>分享上传你喜欢的小说,经过管理员审核后方可显示在本网站</p>
    <hr>

    <el-upload class="upload-demo" ref="upload" 
    action="https://jsonplaceholder.typicode.com/posts/" 
    :on-preview="handlePreview" :on-remove="handleRemove" 
    :file-list="fileList" :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>

  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
      ]
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="less" scoped>
p {
  font-size: 15px;
  text-align: center;
}
</style>