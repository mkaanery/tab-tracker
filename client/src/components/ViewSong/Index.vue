<template>
  <div>
    <v-layout class="">
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="">
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics" />
      </v-flex>
      <v-flex xs6>
        <tabs :tabs="song.tab"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tabs from '@/components/ViewSong/Tabs'
export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tabs
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
.songs {
  padding: 10px;
  height: 330px;
  overflow: auto;
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

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
