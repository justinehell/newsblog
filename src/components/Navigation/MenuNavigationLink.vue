<template>
  <router-link
    :to="to"
    class="px-5 transition duration-300"
    :class="{
      'uppercase text-xs text-light-gray hover:text-white': secondary,
      'font-semibold text-white hover:text-light-gray': !secondary,
    }"
    :title="linkTitle"
    >{{ title }}</router-link
  >
</template>

<script>
export default {
  name: 'MenuNavigation',
  props: {
    title: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      required: false,
      default: 'title',
    },
    to: {
      type: Object,
      required: true,
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
