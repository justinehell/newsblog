<template>
  <div class="aspect-w-4 aspect-h-3" :class="{ 'my-4': rounded }">
    <img
      class="object-cover"
      :class="{ 'rounded-2xl': rounded, 'rounded-t-2xl': !rounded }"
      :src="image ? image : require('@/assets/images/news.jpg')"
      alt="News"
    />
  </div>
</template>
<script>
export default {
  name: 'BaseImage',
  props: {
    image: {
      type: String,
    },
    rounded: {
      type: Boolean,
    },
  },
};
</script>
