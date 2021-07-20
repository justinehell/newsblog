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
:root {
  --dark-primary: #060833;
  --dark-secondary: #333a64;
  --blue-primary: #3148c5;
  --blue-secondary: #1e33a8;
  --light-bg: #f8f9fd;
  --light-bg-secondary: rgba(49, 72, 197, 0.16);
  --light-gray: #959db8;
  --white: #fff;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

:root {
  --spacing: 8px;
}

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
ul {
  padding: 0;
  margin: 0;
}
ul li {
  list-style-type: none;
}
ul li a {
  text-decoration: none;
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
.d-flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
}
.wrap {
  flex-wrap: wrap;
}
.flex-grow {
  flex-grow: 1;
}

/* Spacing Margin */
.my-1 {
  margin: calc(var(--spacing) * 1) 0;
}

.mx-1 {
  margin: 0 calc(var(--spacing) * 1);
}

.mb-1 {
  margin-bottom: calc(var(--spacing) * 1); /* 8px*/
}

.mt-1 {
  margin-top: calc(var(--spacing) * 1); /* 8px*/
}

.mb-2 {
  margin-bottom: calc(var(--spacing) * 2); /* 16px*/
}

.mt-2 {
  margin-top: calc(var(--spacing) * 2); /* 16px*/
}

@media (max-width: 1264px) {
  .wrapper {
    margin: 0 40px;
  }
}

@media (max-width: 960px) {
  section {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
  .btn-menu {
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
  section {
    grid-template-columns: 1fr;
  }
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
