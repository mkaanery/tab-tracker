<template>
  <panel title="YouTube Video" class="ml-2">
    <youtube class="yt" 
      :video-id="youtubeId"
      :player-width="500"
      :player:height="200"></youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.yt {
  padding: 20px;
  height: 420px;
  overflow: hidden;
}
</style>
