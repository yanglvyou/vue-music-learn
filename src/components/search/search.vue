<template>
  <div>
    导航组件1
  </div>
</template>
<script>
  import { getSingerList } from '@/api/singer'
  import { ERR_OK } from 'api/config'
  import Singer from '@/common/js/singer'

  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'

  export default {
    data () {
      return {
        singers: []
      }
    },
    created () {
      console.log(3333333);
       this._getSingerList()
    },
    methods: {
      _getSingerList () {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
             this.singers = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger (list) {
         let map = {
           hot: {
             title: HOT_NAME,
             items: []
           }
         }
         list.forEach((item, index) => {
             if (index < HOT_SINGER_LEN) {
               map.hot.items.push(new Singer({
                 name: item.Fsinger_name,
                 id: item.Fsinger_mid
               }))
             }
             const key = item.Findex
             if (!map[key]) {
               map[key] = {
                 title: key,
                 items: {}
               }
             }
             map[key].items.push(new Singer({
                name: item.Fsinger_name,
                id: item.Fsinger_mid
             }))
         })
        console.log(list)
      }
    }
  }

</script>
<style lang="scss" scoped></style>
