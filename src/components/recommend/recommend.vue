<template>
  <div id="recommend" class="recommend">
   <div v-if="recommends.length" class="slider-wrapper">
      <div class="slider-content">
      <slider ref="slider">
        <div v-for="(item, index) in recommends" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="" />
          </a>
        </div>
      </slider>
    </div>
   </div>
  </div>
</template>
<script>
import Slider from '@/base/slider/slider'
import { getRecommend } from '@/api/recommend'
import { ERR_OK } from '@/api/config'

export default {
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .slider-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
