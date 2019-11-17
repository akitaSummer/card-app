<template>
  <div class="home">
    <app-bar title="INTEREST" left="search" right="crosshairs"></app-bar>
    <tab-list></tab-list>
    <card-list></card-list>
    <card-detail></card-detail>
  </div>
</template>

<script>
  import AppBar from '../components/AppBar'
  import TabList from '../components/TabList'
  import CardList from '../components/CardList'
  import CardDetail from '../components/CardDetail'
  export default {
    name: "Home",
    components: {
      AppBar,
      TabList,
      CardList,
      CardDetail
    }
  }
</script>

<style lang="scss">
  .home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: white;
    background-image: linear-gradient(to top, #99acbe 5%, #a8b3bf 20%, #cfd7dd);
  }
</style>
