<template>
  <div>
    <swiper :options="swiperOption" ref="list" @click="replace($refs.list.swiper.realIndex)">
      <swiper-slide v-for="ad in adCats" :key="ad._id">
        <img class="w-100" :src="ad.image">
      </swiper-slide>
      <div class="swiper-pagination pagination-home px-3 pb-1" style="text-align: right" slot="pagination"></div>
    </swiper>
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item" v-for="(value, key) in sprite" :key="key">
          <i :class="`sprite sprite-${key}`"></i>
          <div>{{value}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm" @click="navClick">
        <i :class="`sprite sprite-${Object.keys(this.sprite).length === 10 ? 'arrow' : 'open'} mr-1`"></i>
        {{Object.keys(this.sprite).length === 10 ? '收起' : '展开'}}
      </div>
    </div>
    <!--end of nav-->

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex ai-center" style="text-align: center" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-gray">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis pr-2" style="text-align: left">{{news.title}}</span>
          <span class="text-gray fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <!--end of news-->

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%" v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" style="width: 100%">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <!--end of hero-->
    <m-list-card icon="menu1" title="精彩视频" :categories="videoCats">
      <template  #items="{category}">
        <div class="d-flex flex-wrap"  style="margin: 0 -0.4rem">
          <router-link tag="div" :to="`/articles/${article._id}`" style="width: 50%" class="p-2" v-for="(article, i) in category.articleList" :key="i">
            <img :src="article.thumbnail" height="100px" width="164.28px">
            <div class="content fs-lg">{{article.title}}</div>
            <div class="d-flex ai-center">
              <div class="sprite sprite-play"></div>
              <div class="text-gray fs-sm flex-1">{{(Math.random()*100).toFixed(1)}}万</div>
              <span class="text-gray fs-sm">{{article.createdAt | date}}</span>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <!--end of video-->
    <m-list-card icon="menu1" title="图文攻略" :categories="strategyCats">
      <template  #items="{category}">
        <div class="d-flex flex-wrap"  style="margin: 0 -0.4rem">
          <router-link tag="div" :to="`/articles/${article._id}`" style="width: 100%" class="p-2" v-for="(article, i) in category.articleList" :key="i">
            <div class="d-flex border-bottom pb-2">
              <img :src="article.thumbnail" width="116px" height="70px">
              <div class="flex-1 pb-2 pl-2">
                <div class="title fs-lg mr-2">{{article.title}}</div>
                <div class="content text-gray fs-sm flex-1">{{article.title}}</div>
                <div class="text-gray fs-sm pt-2" style="display: flow;bottom: 0">{{article.createdAt | date}}</div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  export default {
    name: "Home",
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".pagination-home"
          }
        },
        sprite: {
          news: '爆料站',
          stories: '故事站',
          shop: '周边商城',
          feel: '体验服',
          rookie: '新人专区',
          honour: '荣耀·传承',
          community: '同人社区',
          camp: '王者营地',
          wechat: '公众号',
          edition: '版本介绍'
        },
        newsCats: [],
        heroCats: [],
        adCats: [],
        videoCats: [],
        strategyCats: []
      }
    },
    methods: {
      navClick() {
        if (Object.keys(this.sprite).length === 10) {
          this.sprite = {
            news: '爆料站',
            stories: '故事站',
            shop: '周边商城',
            feel: '体验服'
          }
        } else {

          this.sprite = {
            news: '爆料站',
            stories: '故事站',
            shop: '周边商城',
            feel: '体验服',
            rookie: '新人专区',
            honour: '荣耀·传承',
            community: '同人社区',
            camp: '王者营地',
            wechat: '公众号',
            edition: '版本介绍'
          }
        }
      },
      async fetchNewsCats() {
        const response = await this.$http.get('news/list')
        this.newsCats = response.data
      },
      async fetchHeroCats() {
        const response = await this.$http.get('heroes/list')
        this.heroCats = response.data
      },
      async fetchAdCats() {
        const response = await this.$http.get('ad/list')
        this.adCats = response.data.items
      },
      async fetchVideoCats() {
        const response = await this.$http.get('video/list')
        this.videoCats = response.data
      },
      async fetchStrategyCats() {
        const response = await this.$http.get('strategy/list')
        this.strategyCats = response.data
      },
      replace(index) {
        document.location.replace(this.adCats[index].url)
      }
    },
    created() {
      this.fetchNewsCats()
      this.fetchHeroCats()
      this.fetchAdCats()
      this.fetchStrategyCats()
      this.fetchVideoCats()
    },
    filters: {
      date(val) {
        return dayjs(val).format('MM/DD')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/scss/variables.scss';
  .pagination-home{
    .swiper-pagination-bullet{
      border-radius: 0.1538rem;
      background: map_get($colors, 'white');
      &.swiper-pagination-bullet-active{
        background: map_get($colors, 'info');
      }
    }
  }
  .nav-icons{
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item{
      width: 25%;
      margin-bottom: map_get($spacing-sizes, 3) * $spacing-base-size;
      border-right: 1px solid $border-color;
      div{
        padding-top: map_get($spacing-sizes, 2) * $spacing-base-size;
        padding-bottom: map_get($spacing-sizes, 2) * $spacing-base-size;
      }
      &:nth-child(4n){
      border-right: none;
    }
    }
  }
  .content{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .title{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
</style>
