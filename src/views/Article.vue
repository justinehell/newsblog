<template>
  <ArticleCardDetails :article="article" />
</template>

<script>
import ArticleCardDetails from '../components/ArticleCardDetails.vue';

export default {
  name: 'Article',
  components: { ArticleCardDetails },
  props: {
    article: {
      type: Object,
    },
  },
};
</script>
