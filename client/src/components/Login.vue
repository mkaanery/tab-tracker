<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
        <div class="error" v-html="error" />
        <v-btn 
          dark
          class="cyan"
          @click="login"
        >
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const response = await AuthenticationService.login({
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
