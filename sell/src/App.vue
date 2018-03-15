<template>
  <div>
    <v-header/>
    <div class="tab">
      <div class="tab-item"><a v-link="{path:'/goods'}">商品</a></div>
      <div class="tab-item"><a v-link="{path:'/rating'}">评论</a></div>
      <div class="tab-item"><a v-link="{path:'/seller'}"></a></div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import header from './components/header/head'

  export default {
    components: {
      'v-header': header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
</style>
