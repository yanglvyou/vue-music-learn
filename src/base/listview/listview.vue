<template>
  <scroll class="listview" :data="data">
     <ul>
       <li v-for="(group,index) in data" :key="index" class="list-group">
         <h2 class="list-group__title">{{group.title}}</h2>
         <ul>
          <li v-for="(item,index) in group.items" :key="index" class="list-group__item">
            <img v-lazy="item.avatar" alt="" class="avatar">
            <span class="list-group__name">{{item.name}}</span>
          </li>
       </ul>
       </li>
     </ul>
  </scroll>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
export default {
  props: {
    data: {
        type: Array,
        default () {
          return []
        }
    }
  },
  created () {
    console.log(this.data, 444)
  },
  components: {
    Scroll
  }
}
</script>
<style lang="scss" scoped>

</style>
