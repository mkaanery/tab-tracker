<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <div class="error" v-html="error" />
        <v-btn 
          dark
          class="cyan"
          @click="register"
        >
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'

  export default {
    name: 'register',
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.error = 'Success'
        } catch (error) {
          this.error = error.response.data.error
        }
        // console.log(response.data)
      }
    },
    components: {
      Panel
    }
    // watch: {
    //   email (value) {
    //     console.log('email has changed', value)
    //   }
    // },
    // mounted () {
    //   setTimeout(() => {
    //     this.email = 'emailchanged'
    //   }, 1000)
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#error {
  color: red;
}
</style>
