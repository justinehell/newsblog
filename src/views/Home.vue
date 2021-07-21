<template>
  <div class="wrapper">
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
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
    >
      <div v-if="isLoading">Chargement...</div>
      <NewsCard v-else v-for="(news, i) in newsData" :key="i" :news="news" />
    </main>
  </div>
</template>

<script>
import { fetchNews } from '../services/newsApi';
import NewsCard from '../components/NewsCard.vue';
export default {
  name: 'Home',
  components: {
    NewsCard,
  },
  data() {
    return {
      newsData: [],
      isLoading: true,
      hasError: false,
      offset: 0,
    };
  },
  mounted() {
    fetchNews(this.offset)
      .then((response) => (this.newsData = response.data.data))
      .catch((error) => {
        console.log(error);
        this.hasError = true;
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>
