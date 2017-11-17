<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-my-directive="alertClick">
                  My directive
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'my-directive': {
          bind(el, binding) {
            el.onclick = () => {
              binding.value()
            }
          }
        }
      },
      methods: {
        alertClick () {
          window.alert('A click occorred')
        }
      }
    }
</script>

<style>
</style>
