<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <strong>ex 1</strong>
                <p>{{text | reverseText}}</p>

                <hr>
                <strong>ex 2</strong>
                <p>{{text | textWithCounter}}</p>

                <hr>
                <strong>ex 3</strong>
                <p>{{reversedText}}</p>
                <p>{{countedText}}</p>

                <hr>
                <strong>ex 4</strong>
                <p>{{textWithCounterMixin}}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import textCounterMixin from './textCounter'
    var reverseString = function (value) {
      return value.split('').reverse().join('')
    }

    export default {
      mixins: [textCounterMixin],
      data() {
        return {
          text: 'Vue.js is awesome'
        }
      },
      filters: {
        reverseText(value) {
          return reverseString(value)
        }
      },
      computed: {
        reversedText() {
          return reverseString(this.text)
        },
        countedText() {
          return `${this.text} (${this.text.length})`
        }
      }
    }
</script>

<style>
</style>
