export default {
  nextCard(state) {
    if (state.selected) {
      return
    }
    state.cards.forEach(card => {
      card.active = false
    })
    if (state.currentIndex < state.cards.length - 1) {
      state.currentIndex++
    }
  },
  prevCard(state) {
    if (state.selected) {
      return
    }
    state.cards.forEach(card => {
      card.active = false
    })
    if (state.currentIndex > 0) {
      state.currentIndex--
    }
  },
  selectCard(state, selected) {
    state.unselect = null
    state.selected = selected
  },
  toggleCard(state, { card }) {
    if (state.selected && state.selected.card === card) {
      return
    }
    card.active = !card.active
  },
  unselectCard (state) {
    state.unselect = state.selected
    state.selected = null
  }
}
