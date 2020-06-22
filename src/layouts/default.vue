<template>
  <b-container fluid>
    <b-navbar v-if="user">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'index' }">
          Home
        </b-nav-item>
        <b-nav-item :to="{ name: 'inspire' }">
          Inspire
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="logout">
          Log Out
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-row>
      <b-col>
        <nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      if (this.user) {
        this.$store.commit('resetUser')
        this.$fireAuth.signOut()
      }
    }
  }
}
</script>
