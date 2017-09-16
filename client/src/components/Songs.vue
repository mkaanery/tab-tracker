<template>
  <v-flex xs6 offset-xs3>
    <panel title="Songs">
      <v-btn class="orange accent-2"
        slot="action"
        @click="navigateTo({name: 'songs-create'})"
        dark
        medium
        absolute
        right
        middle
        fab>
        <v-icon>add</v-icon>
      </v-btn>
      List must be below:<br>
      <div v-for="song in songs" :key="song.id">
        {{song.title}}
      </div>
    </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
