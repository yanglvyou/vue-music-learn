<template>
  <div class="m-header">
    <div class="m-header__icon"></div>
    <div class="m-header__text">Chicken Music</div>
    <router-link tag="div" class="m-header__mine" to="/user">
       <i class="iconfont music-mine m-header__iconUser"></i>
    </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
.m-header {
  position: relative;
  height: 44px;
  text-align: center;
  color: $color-theme;
  &__icon {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 32px;
    margin: 6px 9px 0 0;
    @include bg-image("../my-header/logo");
    background-size: 30px 32px;
  }
  &__text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
  &__mine{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
  &__iconUser{
    display: block;
    font-size: 26px;
    color: $color-theme
  }
}
</style>
