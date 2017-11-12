<template>
  <div class="full-name-wrapper">
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        class="form-control"
        v-model.lazy="name.first">
      </input>
    </div>

    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        class="form-control"
        v-model.lazy="name.last">
      </input>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data() {
      return {
        name: {}
      }
    },
    watch: {
      name() {
        let fullName = this.name.first + ' ' + this.name.last;
        this.$emit('input', fullName);
      }
    }
  }
</script>