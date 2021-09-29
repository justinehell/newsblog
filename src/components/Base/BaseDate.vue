<template>
  <span
    class="text-light-gray text-xs tracking-wider"
    :class="{ 'text-lg': big }"
    >{{ $d(new Date(date), 'numeric') }}</span
  >
</template>
<script>
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
};
</script>
