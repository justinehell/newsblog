<template>
  <div class="wrapper">
    <h1 class="py-10 px-0 font-extrabold text-3xl">
      Les articles les plus lus
    </h1>
    <main
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
    >
      <NewsCard v-for="(news, i) in newsData" :key="i" :news="news" />
    </main>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';
export default {
  name: 'Home',
  components: {
    NewsCard,
  },
  computed: {
    newsData() {
      return [
        {
          category: 'sports',
          title: 'Repairs to Begin at Pawhuska"s Water Reservoir',
          published_at: '17/07/2021',
        },
        {
          category: 'sports',
          title:
            'IPL 2021: Ricky Ponting says, ‘mistake on our behalf’ on under bowling R Ashwin after 3-wicket loss to RR',
          published_at: '17/07/2021',
        },
        {
          category: 'sports',
          title:
            'The First ChessKid USA Girls and Women’s Championship Is 2 Days Away',
          published_at: '17/07/2021',
        },
        {
          category: 'sports',
          title: 'Driver crashes into north Edmonton dental office',
          published_at: '17/07/2021',
        },
        {
          category: 'sports',
          title:
            'Engineers improve performance of high-temperature superconductor wires',
          published_at: '17/07/2021',
        },
        {
          category: 'sports',
          title: 'Shocking News 3 !!!',
          published_at: '17/07/2021',
        },
      ];
    },
  },
};
</script>
