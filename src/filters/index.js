import Vue from 'vue'

Vue.filter('dateString', (val) => {
  return val.toDateString().split(' ').slice(1, 3).join(' ')
})
