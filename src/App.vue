<template>
  <div>
    <TheHeader />
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'news' }">News</router-link>
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
  src: url('assets/fonts/Heebo-Regular.ttf');
  font-style: normal;
  /* font-weight: normal; */
}

* {
  box-sizing: border-box;
}
body {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Heebo';
  /* line-height: 1.5; */
}
button {
  border: none;
  cursor: pointer;
}

.wrapper {
  max-width: 1220px;
  margin: auto;
}
.d-none {
  display: none;
}
.d-block {
  display: block;
}

@media (max-width: 1264px) {
  .wrapper {
    margin: 0 40px;
  }
}

@media (max-width: 960px) {
  #toggle-menu-btn {
    display: block;
  }

  #menu-bottom {
    flex-wrap: wrap;
  }
  #menu-bottom-list {
    order: 999;
    width: 100%;
    display: block;
    margin-top: 30px;
    max-height: 0;
    transition: all 300ms ease-in-out;
  }
  #menu-bottom-list li {
    margin-bottom: 10px;
  }
}

@media (max-width: 600px) {
  .wrapper {
    margin: 0 20px;
  }
  #logo {
    width: 230px;
  }
  #menu-top {
    display: none;
  }
}
</style>
