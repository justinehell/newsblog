<template>
  <article
    class="flex flex-col bg-light-bg rounded-2xl cursor-pointer relative bottom-0 hover:bottom-1.5 hover:shadow-xl transition-all ease-in-out duration-300"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="aspect-w-4 aspect-h-3 ">
      <img
        class="object-cover rounded-t-2xl"
        :src="news.image ? news.image : require('../assets/images/news.jpg')"
        alt="News"
      />
    </div>
    <div class="flex flex-grow flex-col p-6 items-start">
      <span
        class="text-blue bg-light-bg-secondary px-2 py-1 rounded text-xs font-semibold"
        >{{ news.category | capitalize }}</span
      >
      <h2
        class="text-dark-secondary font-semibold text-2xl px-0 py-5 transition-all ease-in-out duration-300 "
        :class="{ 'text-blue-secondary ': isHovered }"
      >
        {{ news.title }}
      </h2>
      <div class="flex-grow"></div>
      <span class="text-light-gray text-xs tracking-wider">{{
        publishedDate
      }}</span>
    </div>
  </article>
</template>

<script>
import dayjs from 'dayjs';
export default {
  name: 'NewsCard',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    publishedDate() {
      return dayjs(this.news.published_at).format('DD/MM/YYYY');
    },
  },
  methods: {},
};
</script>
