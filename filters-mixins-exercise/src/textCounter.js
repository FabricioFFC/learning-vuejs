const textCounter = {
  data() {
    return {
      text: ''
    }
  },
  computed: {
      textWithCounterMixin() {
        return `${this.text} (${this.text.length})`
      }
  }
}

export default textCounter
