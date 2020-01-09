<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex ai-center" :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i class="iconfont icon-menu1 pr-2" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1"><strong>{{title}}</strong></div>
      <i class="iconfont icon-menu" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      title: {type: String, required: true},
      icon: {type: String, required: true},
      plain: {type: Boolean}
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables';
  .card{
    border-bottom: 1px solid $border-color;
  }
</style>
