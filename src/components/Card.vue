<template>
  <div class="card" :class="{ card__active: card.active, card__selected: selected }">
    <card-front :card="card" @click.native="toggleCard({ Card })"></card-front>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import CardFront from './CardFront'
  export default {
    name: "Card",
    components: {
      CardFront
    },
    props: {
      card: {
        type: Object
      },
      selected: {
        type: Boolean
      }
    },
    methods: {
      ...mapMutations(['toggleCard']),
      handleClick() {
        const appRect = document.querySelector('#app').getBoundingClientRect()
        const elRect = this.$el.getBoundingClientRect()
        const card = this.card
        const rect = {}

        rect.top = elRect.top - appRect.top
        rect.left = elRect.left - appRect.left
        rect.width = elRect.width
        rect.height = elRect.height
        rect.appWidth = appRect.width
        rect.appHeight = appRect.height

        this.$emit('select', { rect, card })
      }
    }
  }
</script>

<style lang="scss">
  .card {
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .card__selected {
    visibility: hidden;
  }
  .card__active {
    .card_bact {
      transform: scale(1);
      opacity: 1;
    }
    .card_front {
      transform: translate3d(0, -100px, 0);
    }
  }
</style>
