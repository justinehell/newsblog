<template>
  <router-link
    :to="{ name: 'news', params: { news: news } }"
    style="display: inherit"
  >
    <article
      class="flex flex-col bg-light-bg rounded-2xl cursor-pointer relative bottom-0 hover:bottom-1.5 hover:shadow-xl transition-all ease-in-out duration-300"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <BaseImage :image="news.image" />
      <div class="flex flex-grow flex-col p-6 items-start">
        <BaseTag :tag="news.category" />
        <h2
          class="text-dark-secondary font-semibold text-2xl px-0 py-5 transition-all ease-in-out duration-300 "
          :class="{ 'text-blue-secondary ': isHovered }"
        >
          {{ news.title }}
        </h2>
        <div class="flex-grow"></div>
        <BaseDate :date="news.published_at" />
      </div>
    </article>
  </router-link>
</template>

<script>
import BaseDate from '../components/Base/BaseDate.vue';
import BaseTag from '../components/Base/BaseTag.vue';
import BaseImage from './Base/BaseImage.vue';
export default {
  name: 'NewsCard',
  components: {
    BaseDate,
    BaseTag,
    BaseImage,
  },
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
  methods: {},
};
</script>
