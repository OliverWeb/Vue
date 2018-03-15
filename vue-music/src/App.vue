<template>
  <div id="app">
    <m-header/>
    <tab/>
    <!-- 将DOM缓存到内容的中 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>

</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
