<script setup>
import { ref, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useElementVisibility, useMediaQuery } from "@vueuse/core";
import { search } from "../api/api";
import Header from "../components/Header.vue";
import FooterNotice from "../components/FooterNotice.vue";
import ResultDesktop from "../components/ResultDesktop.vue";
import ResultMobile from "../components/ResultMobile.vue";

const route = useRoute();

const results = ref([]);
const page = ref(1);
const hasNextPage = ref(false);
const isLoading = ref(false);
const sentinel = ref(null);

const isSentinelResultVisible = useElementVisibility(sentinel);
const isMobile = useMediaQuery("(max-width: 1209px)");

const loadMore = async () => {
  isLoading.value = true;
  const result = await search(route.params.query, page.value, 18);
  if (result) {
    results.value = [...results.value, ...result.results];
    hasNextPage.value = result.hasNextPage;
  }
  isLoading.value = false;
};

onBeforeMount(async () => {
  const result = await search(route.params.query, 1, 18);
  if (result) {
    results.value = result.results;
    hasNextPage.value = result.hasNextPage;
  }
});

watch(isSentinelResultVisible, (visible) => {
  if (visible && hasNextPage.value && !isLoading.value) {
    page.value++;
    loadMore();
  }
});
</script>

<template>
  <div class="page">
  <Header />
    <div class="content">
      <div v-if="results.length && !isMobile" class="results">
        <ResultDesktop
          v-for="result in results" 
          :key="result.id"
          :id="result.id" 
          :title="result.title.romaji || result.title.english || result.title.native || 'Unknown'" 
          :image="result.image"
        />
      </div>
      <div v-if="results.length && isMobile" class="results">
        <ResultMobile
          v-for="result in results" 
          :key="result.id"
          :id="result.id" 
          :title="result.title.romaji || result.title.english || result.title.native || 'Unknown'" 
        />
      </div>
      <div ref="sentinel" class="sentinel"></div>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.results {
  display: flex;
  width: 1130px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}

.sentinel {
  height: 1px;
}

@media screen and (max-width: 1209px) {
  .page {
    gap: 20px;
  }

  .results {
    width: 310px !important;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>