<template>
  <div class="singer" ref="singer">
    <!-- todo 注册组件后如何使用的组件的标签 -->
    <listview :data="singers"></listview>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from '../../api/singer'
  import {ERR_OK} from '../../api/config'
  import Singer from '../../common/js/singer'
  import Listview from '../../base/listview/listview'

  const HOT_NAME = '热门'
  const HOT_SINGGER_LEN = 10

  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normaluzeSunger(res.data.list)
          }
        })
      },
      _normaluzeSunger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        // 有序列表 ,需要处理的map
        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    },
    components: {
      Listview
    }
  }
  /*
  * todo  import引用方法和对象这里用{},进行包裹
  * todo charCodeAt(0) 用法,对象排序的方法
  * */
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /* better-scroll中父元素的高度是固定的,子元素撑开父元素才可以进行滚动 */
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
