<template>
  <div class="page-article">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue" @click="$router.push('/')"></div>
      <strong class="flex-1 text-blue pl-2 fs-xs">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.createdAt | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 pt-3 body fs-lg"></div>
    <div class="border-top py-3 px-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link class="py-1" tag="div" :to="`/articles/${item._id}`" v-for="item in model.related" :key="item.key">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  export default {
    name: "Article",
    props: {
      id: {required: true}
    },
    filters: {
      date(val) {
        return dayjs(val).format('MM/DD')
      }
    },
    data() {
      return {
        model: {}
      }
    },
    methods: {
      async fetch(){
        const response = await this.$http.get(`articles/${this.id}`)
        this.model = response.data
      }
    },
    created() {
      this.fetch()
    },
    watch: {
      id() {
        this.fetch()
      }
    }
  }
</script>

<style lang="scss">
  .page-article{
    .icon-Back{
      font-size: 1.6923rem;
    }
    .body{
      text-align: center;
      img{
        max-width: 100%;
        height: auto;
      }
      iframe{
        width: 100%;
        height: auto;
      }
    }
  }
</style>
