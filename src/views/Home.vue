<template>
  <div class="pb-6 max-w-screen-xl my-0 mx-5 md:mx-10 xl:m-auto">
    <h1 class="py-10 px-0 font-extrabold text-3xl">
      {{ $t('pages.home.title') }}
    </h1>
    <main v-if="hasError">
      <p>
        {{ $t('pages.home.errorMessage') }}
      </p>
    </main>
    <main
      v-else
      class="pb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
    >
      <template v-if="isLoading">
        <SkeletonCardLoader v-for="n in 9" :key="n" />
      </template>
      <ArticleCard
        v-else
        v-for="(article, i) in articles"
        :key="i"
        :article="article"
      />
    </main>
    <button
      v-if="moreArticlesAvailable"
      class="bg-blue hover:bg-blue-secondary text-white font-bold py-2 px-4 rounded"
      @click="loadMoreArticles"
    >
      {{ $t('utils.seeMore') }}
    </button>
    <transition name="fade">
      <div
        id="pagetop"
        class="fixed right-0 bottom-0 cursor-pointer mr-8 mb-8"
        v-show="scrollY > 300"
        @click="toTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4a5568"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import { fetchNews } from '../services/newsApi';

import ArticleCard from '../components/ArticleCard.vue';
import SkeletonCardLoader from '../components/SkeletonCardLoader';

export default {
  name: 'Home',
  components: {
    ArticleCard,
    SkeletonCardLoader,
  },
  data() {
    return {
      articles: [],
      isLoading: true,
      hasError: false,
      page: 1,
      totalArticles: 0,
      scrollTimer: 0,
      scrollY: 0,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    moreArticlesAvailable() {
      return this.totalArticles > this.articles.length;
    },
  },
  methods: {
    fetchData(page = 1) {
      return fetchNews(page)
        .then((response) => {
          this.articles = [...this.articles, ...response.data.articles];
          this.totalArticles = response.data.totalResults;
        })
        .catch((error) => {
          console.log(error);
          this.hasError = true;
        })
        .finally(() => {
          setTimeout(() => (this.isLoading = false), 500);
        });
    },
    loadMoreArticles() {
      this.page += 1;
      this.fetchData(this.page);
    },
    handleScroll() {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
