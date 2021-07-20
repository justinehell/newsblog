<template>
  <router-link
    :to="to"
    :class="[
      'px-5 transition duration-300 transform ',
      secondary
        ? 'uppercase text-xs text-light-gray hover:text-white '
        : 'font-semibold text-white hover:text-light-gray',
    ]"
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
      default: 'Title',
    },
    linkTitle: {
      type: String,
      required: false,
    },
    to: {
      type: Object,
      required: true,
      default() {
        return { name: 'home' };
      },
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped></style>
