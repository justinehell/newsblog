<template>
  <div
    class="max-w-screen-xl flex justify-center my-0 lg:block md:mx-10 xl:m-auto"
  >
    <div v-if="news" class="w-3/4 py-4">
      <BaseTag :tag="news.category" big />
      <h1 class="text-dark text-4xl font-semibold px-0 py-5">
        {{ news.title }}
      </h1>
      <BaseDate :date="news.published_at" big />
      <BaseImage :image="news.image" rounded />
      <p class="text-justify">
        {{ news.description }}
      </p>
    </div>
  </div>
</template>

<script>
import BaseDate from './Base/BaseDate.vue';
import BaseTag from '../components/Base/BaseTag.vue';
import BaseImage from '../components/Base/BaseImage.vue';

export default {
  name: 'NewsCardDetails',
  components: { BaseDate, BaseTag, BaseImage },
  props: {
    news: {
      type: Object,
    },
  },
  created() {
    return this.news ? null : this.$router.push({ name: 'home' });
  },
};
</script>
