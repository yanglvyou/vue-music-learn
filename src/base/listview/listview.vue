<template>
  <scroll class="listview" :data="data" ref="listview">
     <ul>
       <li v-for="(group,index) in data" :key="index" class="list-group" ref="listGroup">
         <h2 class="list-group__title">{{group.title}}</h2>
         <ul>
          <li v-for="(item,index) in group.items" :key="index" class="list-group__item">
            <img v-lazy="item.avatar" alt="" class="list-group__avatar">
            <span class="list-group__name">{{item.name}}</span>
          </li>
       </ul>
       </li>
     </ul>
     <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart"
       @touchmove.stop.prevent="onShortcutTouchMove"
       @touchend.stop
      >
       <ul>
         <li class="list-shortcut__item" v-for="(item,index) in shortcutList" :data-index="index" :key="index">
           {{item}}
         </li>
       </ul>
     </div>
  </scroll>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
import { getData } from '@/common/js/dom'

const ANCHOR_HEIGHT = 18

export default {
  props: {
    data: {
        type: Array,
        default () {
          return []
        }
    }
  },
  computed: {
   shortcutList () {
     return this.data.map((group) => {
       return group.title.substr(0, 1)
     })
   }
  },
  created () {
    this.touch = {}
  },
  methods: {
    onShortcutTouchStart (e) {
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex

        this._scrollTo(anchorIndex)
      },
     onShortcutTouchMove (e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollTo(anchorIndex)
     },
    _scrollTo (index) {
      console.log(this.$refs.listGroup[index])
       this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    }
  },
  components: {
    Scroll
  }
}
</script>
<style lang="scss" scoped>
  @import '@/common/scss/variable.scss';
  .listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
    .list-group{
      padding-bottom: 30px;
      &__title{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
      }
      &__item {
        display: flex;
        align-items: center;
        padding:20px 0 0 30px;
      }
       &__avatar{
          width: 50px;
          height: 50px;
          border-radius: 5%;
        }
        &__name{
           margin-left: 20px;
          color: $color-text-l;
          font-size: $font-size-medium;
        }
    }
    .list-shortcut{
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      &__item {
        padding: 3px;
        line-height: 1;
        color: $color-text-l;
        font-size: $font-size-small;
      }
    }
  }
</style>
