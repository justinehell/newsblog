<template>
  <div class="pb-6 max-w-screen-xl my-0 mx-5 md:mx-10 xl:m-auto">
    <h1 class="py-10 px-0 font-extrabold text-3xl">
      Les articles les plus lus
    </h1>
    <main v-if="hasError">
      <p>
        Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
        informations pour le moment. Veuillez réessayer ultérieurement.
      </p>
    </main>
    <main
      v-else
      class="pb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
    >
      <template v-if="isLoading">
        <SkeletonCardLoader v-for="n in 9" :key="n" />
      </template>
      <NewsCard v-else v-for="(news, i) in newsData" :key="i" :news="news" />
    </main>
    <button
      class="bg-blue hover:bg-blue-secondary text-white font-bold py-2 px-4 rounded"
      @click="loadMoreData"
    >
      Load More
    </button>
  </div>
</template>

<script>
import { fetchNews } from '../services/newsApi';

import NewsCard from '../components/NewsCard.vue';
import SkeletonCardLoader from '../components/SkeletonCardLoader';

import { LIMIT } from '../utils/appSettings';

export default {
  name: 'Home',
  components: {
    NewsCard,
    SkeletonCardLoader,
  },
  data() {
    return {
      newsData: [],
      isLoading: true,
      hasError: false,
      offset: 0,
    };
  },
  created() {
    this.fetchData(this.offset);
  },
  methods: {
    fetchData(offset) {
      return fetchNews(offset)
        .then(
          (response) =>
            (this.newsData = [...this.newsData, ...response.data.data])
        )
        .catch((error) => {
          console.log(error);
          this.hasError = true;
        })
        .finally(() => {
          setTimeout(() => (this.isLoading = false), 500);
        });
    },
    loadMoreData() {
      this.offset += LIMIT;
      this.fetchData(this.offset);
    },
  },
};
</script>
