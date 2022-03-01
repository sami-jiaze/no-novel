<template>
  <div>
    <div class="title-box" v-if="cover.type === 1">
      <!-- 标题 -->
      <span class="title">{{title}}</span>
      <slot></slot>
      <!-- 单张图片 -->
      <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1">
      <!-- <img :src="pic" alt=""> -->
    </div>
    <!-- label 区域的插槽 -->
    <div class="label-box" v-if="cover.type === 1">
      <span>作者: {{author}} &nbsp;&nbsp; {{cmtcount}}评论 &nbsp;&nbsp; 发布日期 {{arttime}}</span>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    // 评论数
    cmtcount: {
      // 既可以是数字也可以是字符串
      type: [Number, String],
      default: ''
    },
    // 发布日期
    arttime: {
      type: String,
      default: ''
    },
    // 封面信息对象
    cover: {
      type: Object,
      default: function () {
        return { type: 0 }
      }
    }
    // pic: {
    //   type: String,
    //   default:''
    // }
  }
}
</script>

<style lang='less'>
img{
  width: 100%;
  height: 100%;
}
.more{
  padding-left: 60px;
}
.title{
  font-size: 30px;
  font-weight: 600;
}
</style>