<template>
  <div class="sign-up-wrapper">
    <h1>Sign-Up</h1>
    <full-name v-model="user.fullName"></full-name>

    <div class="form-group">
      <label for="email">E-mail</label>
      <input
        type="text"
        id="email"
        class="form-control"
        v-model="user.email">
      </input>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        v-model="user.password">
      </input>
    </div>

    <div class="form-group">
      <label>Store in Database?: </label>
      <label for="yes">
        <input
          type="radio"
          id="yes"
          value="yes"
          v-model="user.stored"
        >
          Yes
        </input>
      </label>

      <label for="no">
        <input
          type="radio"
          id="no"
          value="no"
          v-model="user.stored"
        >
          No
        </input>
      </label>
    </div>

    <button
      class="btn btn-primary"
      @click.prevent="submitData">Submit
    </button>
  </div>
</template>

<script>
  import FullName from './FullName.vue';

  export default {
    props: {
      user: {
        type: Object
      }
    },
    methods: {
      submitData() {
        this.$emit('submittedData')
      }
    },
    components: {
      'full-name': FullName
    }
  }
</script>