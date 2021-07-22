<template>
  <NewsCardDetails :news="news" />
</template>

<script>
import NewsCardDetails from '../components/NewsCardDetails.vue';

export default {
  name: 'News',
  components: { NewsCardDetails },
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>
