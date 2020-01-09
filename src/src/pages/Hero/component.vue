<template>
  <div class="myBottom" :style="{background: color}" :class="{notAble: able}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "component",
    props: {
      questions: {
        type: Array,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
      changeIndex: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        submit: new Array(this.questions.length)
      }
    },
    computed: {
      question() {
        console.log(`${this.index+1}. ${this.questions[this.index].question}`)
        return `${this.index+1}. ${this.questions[this.index].question}`
      }
    }
  }
</script>

<style scoped>

</style>
