<template>
  <div id="recommend" class="recommend">
    <div class="recommend-content">
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
      <div class="recommend-list">
        <h1 class="recommend-list__list-title">热门歌曲推荐</h1>
        <ul>
          <li
            v-for="(item, index) in discList"
            class="recommend-list__item"
            :key="index"
          >
           <div class="recommend-list__item--icon">
             <img width="60" height="60" :src="item.imgurl">
           </div>
           <div class="recommend-list__item--text">
              <h2 class="recommend-list__item--name" v-html="item.creator.name"></h2>
              <p class="recommend-list__item--desc" v-html="item.dissname"></p>
           </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "@/base/slider/slider";
import { getRecommend, getDiscList } from "@/api/recommend";
import { ERR_OK } from "@/api/config";

export default {
  data() {
    return {
      recommends: [],
      discList: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
        }
      });
    }
  },
  components: {
    Slider
  }
};
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      &__list-title {
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      &__item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding:0 20px 20px;
        &--icon{
          flex:0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        &--text{
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex:1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium
        }
        &--name{
           margin-bottom: 10px;
           color: $color-text
        }
        &--desc{
          color: $color-text-d;
          /* overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap; */

          /* overflow: hidden;
          display:-webkit-box;
          -webkit-line-clamp:1;
          -webkit-box-orient:vertical; */
        }
      }
    }
  }
}
</style>
