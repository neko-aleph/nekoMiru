<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import { useMediaQuery } from "@vueuse/core";
import { getEpisode, getTitle } from "../api/api";
import TitleCover from "../components/TitleCover.vue";
import Header from "../components/Header.vue";
import TitleInfo from "../components/TitleInfo.vue";
import FooterNotice from "../components/FooterNotice.vue";
import EpisodePlayer from "../components/EpisodePlayer.vue";
import EpisodeSelectMobile from "../components/EpisodeSelectMobile.vue";
import EpisodeSelectDesktop from "../components/EpisodeSelectDesktop.vue";
import Empty from "../components/Empty.vue";

const route = useRoute();

const cover = ref(null);
const title = ref(null);
const season = ref(null);
const format = ref(null);
const status = ref(null);
const description = ref(null);
const episodes = ref([]);
const loaded = ref(false);
const selectedEpisode = ref(0);
const episodeTitle = ref(null);
const episodeThumbnail = ref(null);
const episodeVideo = ref(null);
const episodeSubtitles = ref(null);
const episodeReferer = ref(null);

const isMobile = useMediaQuery("(max-width: 1209px)");

async function changeEpisode(i) {
  const episode = episodes.value[i];
  if (!episode) return;

  const result = await getEpisode(episode.id);
  if (!result) return;

  episodeTitle.value = episode.title;
  episodeThumbnail.value = `https://cors.kuro-neko.dev/?url=${episode.image}`;
  episodeVideo.value = result.sources?.[0]?.url ?? "";
  episodeSubtitles.value = result.subtitles ?? [];
  episodeReferer.value = result.headers.Referer;
}

onBeforeMount(async () => {
  const result = await getTitle(route.params.titleId);
  if (result) {
    title.value = result.title.romaji || result.title.english || result.title.native || "Unknown";
    cover.value = result.image;
    description.value = result.description || "No description";
    status.value = result.status || "Unknown";
    format.value = result.type || "Unknown";
    season.value = result?.season == null || result?.releaseDate == null ? "Unknown" : `${result.season.charAt(0).toUpperCase()}${result.season.slice(1).toLowerCase()} ${result.releaseDate}`;
    episodes.value = result.episodes;

    loaded.value = true;
    await changeEpisode(0);
  }
});

watch(selectedEpisode, async (i) => {
  await changeEpisode(i);
});
</script>

<template>
  <div v-if="!isMobile" class="page">
    <Header />
    <div v-if="loaded" class="content">
      <div v-if="episodes.length" class="row fix-height">
        <EpisodePlayer
          :title="episodeTitle" 
          :thumbnail="episodeThumbnail" 
          :video="episodeVideo" 
          :subtitles="episodeSubtitles" 
          :referer="episodeReferer"
        />
        <EpisodeSelectDesktop v-model="selectedEpisode" :episodes="episodes" />
      </div>
      <div class="row">
        <TitleCover :image="cover" />
        <TitleInfo
          :title="title" 
          :season="season" 
          :format="format" 
          :status="status" 
          :description="description" 
        />
      </div>
    </div>
    <FooterNotice />
  </div>
  <div v-if="loaded && isMobile" class="content">
    <TitleCover :image="cover" />
    <TitleInfo
      :title="title" 
      :season="season" 
      :format="format" 
      :status="status" 
      :description="description"
    />
    <EpisodeSelectMobile v-if="episodes.length" v-model="selectedEpisode" :episodes="episodes" />
    <EpisodePlayer
      v-if="episodes.length"
      :title="episodeTitle" 
      :thumbnail="episodeThumbnail" 
      :video="episodeVideo" 
      :subtitles="episodeSubtitles" 
      :referer="episodeReferer"
    />
    <Empty v-else />
    <FooterNotice />
  </div>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.content {
  min-height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

@media screen and (min-width: 1210px) {
  .content {
    min-height: auto;
    padding: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
    width: 1130px;
  }

  .fix-height {
    height: 400px;
  }
}
</style>