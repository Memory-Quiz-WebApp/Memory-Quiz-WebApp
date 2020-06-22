<template>
  <b-container fluid>
    <b-row
      :class="{ 'd-flex': true, 'align-items-center': !user }"
      :style="{ height: !user ? 'calc(100vh - 56px)' : '100vh' }"
    >
      <b-col cols="12" sm="12" offset-sm="12" md="4" offset-md="4">
        <div
          v-if="!user"
          class="mx-auto p-2 rounded"
          style="max-width: 300px; background-color: rgba(0,0,0,0.4)"
        >
          <h1 class="text-center text-light mb-3">
            Login
          </h1>
          <login-form />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import LoginForm from '~/components/LoginForm'
export default {
  layout: 'default',
  components: {
    LoginForm
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
