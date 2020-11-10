
<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
      <i class="music-yinyue"></i>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '@/components/my-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang='scss'>
</style>
