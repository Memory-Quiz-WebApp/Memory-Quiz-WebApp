<template>
  <b-form class="w-100">
    <b-button
      v-for="(AuthProvider, ProviderIndex) in AuthProviders"
      :key="ProviderIndex"
      :style="`background-color: ${AuthProvider.color}`"
      :variant="AuthProvider.variant"
      class="d-block w-100 mb-2 mx-auto"
      @click="loginWithProvider(AuthProvider.provider)"
    >
      {{ AuthProvider.label }}
    </b-button>
  </b-form>
</template>

<script>
import AuthProviders from '~/utils/AuthProviders'
export default {
  data() {
    return {
      AuthProviders
    }
  },
  methods: {
    loginWithProvider(provider) {
      if (provider.label === 'Microsoft') {
        provider.setCustomParameters({
          // Optional "tenant" parameter in case you are using an Azure AD tenant.
          // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
          // or "common" for tenant-independent tokens.
          // The default value is "common".
          tenant: 'eroticle.onmicrosoft.com'
        })
      }
      this.$fireAuth.signInWithPopup(provider).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
        /* eslint-disable-next-line */
        console.log({
          errorCode,
          errorMessage,
          email,
          credential
        })
      })
      /* eslint-disable-next-line */
      console.log(provider)
    }
  }
}
</script>
