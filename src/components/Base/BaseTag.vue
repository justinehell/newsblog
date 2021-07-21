<template>
  <span
    class="text-blue bg-light-bg-secondary px-3 py-2 rounded text-xs font-semibold"
    :class="{ 'text-lg': big }"
    >{{ tag | capitalize }}</span
  >
</template>
<script>
export default {
  name: 'BaseTag',
  props: {
    tag: {
      type: String,
      required: true,
    },
    big: {
      type: Boolean,
    },
  },
};
</script>
