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
      <div v-for="song in songs" :key="song.id">
        <v-layout class="songs">
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
            <v-btn 
              dark
              class="cyan mt-2"
              @click="navigateTo({
                name: 'song',
                params: {
                  songId: song.id
                  }
                })">
              View
            </v-btn>
          </v-flex>

          <v-flex xs6>
            <img class="song-image" :src="song.albumImageUrl">
          </v-flex>
        </v-layout>
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
.songs {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0, auto;
}
</style>
