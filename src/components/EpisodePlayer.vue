<script setup>
import { computed } from "vue";
import "vidstack/bundle";

const proxy = import.meta.env.VITE_CORS_PROXY_URL;

const props = defineProps({
  title: String,
  thumbnail: String,
  video: String,
  subtitles: Array,
  referer: String,
});

const emit = defineEmits(['episodeEnded']);

const src = computed(() => {
  return `${proxy}/${ window.btoa(`${props.video}|${props.referer}`) }.m3u8`;
});

const substitlesFiltered = computed(() => {
  return props.subtitles.filter(item => item.lang !== "thumbnails").map(item => ({
      ...item,
      url: `${proxy}/${window.btoa(`${item.url}|${props.referer}`)}.vtt`
    }));
});

const thumbnails = computed(() => {
  return props.subtitles.filter(item => item.lang === "thumbnails")[0];
});

function onEnded() {
  emit('episodeEnded');
}
</script>

<template>
  <media-player
    crossorigin
    :key="src"
    :style="{ borderRadius: '12px' }"
    :title="title"
    :src="src"
    @ended="onEnded"
  >
    <media-provider>
      <track
        v-for="(subs, index) in substitlesFiltered"
        :key="subs.lang"
        :src="subs.url"
        kind="subtitles"
        :label="subs.lang"
        :srclang="subs.lang"
        :default="index === 0"
      />
    </media-provider>
    <media-video-layout :thumbnails="thumbnails"></media-video-layout>
  </media-player>
</template>

<style>
media-player {
  width: 310px !important;
  aspect-ratio: 18 / 9 !important;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--neko-theme-secondary-bg-color);
  display: block;
  border: 1px solid var(--neko-theme-quinary-bg-color) !important;
}

media-player,
media-player * {
  backface-visibility: hidden;
}

media-captions,
.vds-captions,
media-captions * {
  backdrop-filter: none !important;
  filter: none !important;
  mix-blend-mode: normal !important;
  opacity: 1 !important;
}

media-player[data-fullscreen] {
  border: none !important;
  border-radius: 0 !important;
}

@media screen and (min-width: 1210px) {
  media-player {
    height: 400px !important;
    min-height: 400px !important;
    width: 800px !important;
    min-width: 800px !important;
    aspect-ratio: 18/9 !important;
  }
}
</style>