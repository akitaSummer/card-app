<template>
  <div class="card-list" :class="{'card-list__selected': !!selected}">
    <ul :style="{width: `${cards.length * 100}%`}">
      <li v-for="card in cards" :key="card.id" :style="{transform: `translate3d(-${currentIndex * 100}%, 0, 0)`}">
        <card :card="card" :selected="selected && selected.card === card" @select="selectCard"></card>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Card from './Card'
  export default {
    name: "CardList",
    components: {
      Card
    },
    computed: {
      ...mapState(['cards', 'selected', 'currentIndex'])
    },
    methods: {
      ...mapMutations(['prevCard', 'nextCard', 'selectCard'])
    }
  }
</script>

<style lang="scss">
  .card-list {
    margin: 30px;
    height: 496px;
    transform: scaleX(1);
    transition: all 0.6s ease;
    ul {
      display: flex;
      height: 100%;
    }
    li {
      flex: 1;
      transition: all 0.6s ease;
    }
  }
  .card-list__selected {
    transform: scaleX(1.1);
  }
</style>
