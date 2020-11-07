<template>
  <div>
    导航组件
  </div>
</template>
<script>
import { getRecommend } from '@/api/recommend'
import { ERR_OK } from '@/api/config'

export default {
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        console.log('res: ', res)
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
