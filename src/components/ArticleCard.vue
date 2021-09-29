<template>
  <router-link
    :to="{ name: 'Article', params: { article } }"
    style="display: inherit"
  >
    <article
      class="flex flex-col bg-light-bg rounded-2xl cursor-pointer relative bottom-0 hover:bottom-1.5 hover:shadow-xl transition-all ease-in-out duration-300"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <BaseImage :image="article.urlToImage" />
      <div class="flex flex-grow flex-col p-6 items-start">
        <BaseTag :tag="article.source.name" />
        <h2
          class="text-dark-secondary font-semibold text-2xl px-0 py-5 transition-all ease-in-out duration-300 "
          :class="{ 'text-blue-secondary ': isHovered }"
        >
          {{ article.title }}
        </h2>
        <div class="flex-grow"></div>
        <BaseDate :date="article.publishedAt" />
      </div>
    </article>
  </router-link>
</template>

<script>
import BaseDate from './Base/BaseDate.vue';
import BaseTag from './Base/BaseTag.vue';
import BaseImage from './Base/BaseImage.vue';

export default {
  name: 'ArticleCard',
  components: {
    BaseDate,
    BaseTag,
    BaseImage,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>
