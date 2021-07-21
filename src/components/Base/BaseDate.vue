<template>
  <span
    class="text-light-gray text-xs tracking-wider"
    :class="{ 'text-lg': big }"
    >{{ publishedDate }}</span
  >
</template>
<script>
import dayjs from 'dayjs';
export default {
  name: 'BaseDate',
  props: {
    date: {
      type: String,
      required: true,
    },
    big: {
      type: Boolean,
    },
  },
  computed: {
    publishedDate() {
      return dayjs(this.date).format('DD/MM/YYYY');
    },
  },
};
</script>
