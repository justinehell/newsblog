<template>
  <div
    class="max-w-screen-xl flex justify-center my-0 lg:block md:mx-10 xl:m-auto"
  >
    <div v-if="article" class="w-3/4 py-4">
      <BaseTag :tag="article.source.name" big />
      <h1 class="text-dark text-4xl font-semibold px-0 py-5">
        {{ article.title }}
      </h1>
      <BaseDate :date="article.publishedAt" big />
      <BaseImage :image="article.urlToImage" rounded />
      <p class="text-justify">
        {{ article.description }}
      </p>
    </div>
  </div>
</template>

<script>
import BaseDate from './Base/BaseDate.vue';
import BaseTag from './Base/BaseTag.vue';
import BaseImage from './Base/BaseImage.vue';

export default {
  name: 'ArticleCardDetails',
  components: { BaseDate, BaseTag, BaseImage },
  props: {
    article: {
      type: Object,
    },
  },
  created() {
    return this.article
      ? null
      : this.$router.push({ name: 'Home', params: { lang: 'en' } });
  },
};
</script>
