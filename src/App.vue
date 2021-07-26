<template>
  <div>
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style>
@font-face {
  font-family: 'Heebo';
  src: local('Heeba'),
    url('./assets/fonts/Heebo-Regular.ttf') format('truetype');
  font-style: normal;
}
body {
  font-family: 'Heebo';
}
</style>
