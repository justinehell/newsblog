<template>
  <header>
    <nav class="wrapper">
      <div id="menu-top" class="d-flex justify-between my-1">
        <ul class="menu d-flex justify-between">
          <li>
            <a
              class="menu__link"
              href="https://www.facebook.com/"
              target="_blank"
              title="lien vers le site facebook.com"
            >
              <IconFacebook className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              class="menu__link"
              href="https://www.twitter.com/"
              target="_blank"
              title="lien vers le site twitter.com"
            >
              <IconTwitter className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              class="menu__link"
              href="https://www.linkedin.com/"
              target="_blank"
              title="lien vers le site linkedin.com"
            >
              <IconLinkedin className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              class="menu__link"
              href="https://www.instagram.com/"
              target="_blank"
              title="lien vers le site instagram.com"
            >
              <IconInstagram className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              class="menu__link"
              href="https://www.pinterest.com/"
              target="_blank"
              title="lien vers le site pinterest.com"
            >
              <IconPinterest className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              class="menu__link"
              href="https://www.youtube.com/"
              target="_blank"
              title="lien vers le site youtube.com"
            >
              <IconYoutube className="menu__icon" />
            </a>
          </li>
        </ul>
        <ul id="menu-top-list" class="menu d-flex justify-between">
          <li>
            <router-link
              to="/"
              class="menu__link--secondary menu__link--stretch"
              title="a propos"
              >A propos</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="menu__link--secondary menu__link--stretch"
              title="favoris"
              >Mes favoris</router-link
            >
          </li>
        </ul>
      </div>
      <div id="menu-bottom" class="d-flex justify-between my-1">
        <router-link to="/" title="retour acceuil">
          <img
            id="logo"
            src="../assets/images/logo.svg"
            alt="logo de News Blog"
          />
        </router-link>
        <ul
          id="menu-bottom-list"
          class="menu d-flex justify-between align-center"
        >
          <li>
            <router-link
              to="/"
              class="menu__link menu__link--stretch"
              title="actualités"
              >Actualités</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="menu__link menu__link--stretch"
              href=""
              title="technologie"
              >Technologie</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="menu__link menu__link--stretch"
              title="sciences"
              >Sciences</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="menu__link menu__link--stretch"
              title="diverstissement"
              >Divertissement</router-link
            >
          </li>
        </ul>
        <button
          id="toggle-menu-btn"
          class="btn-menu d-none"
          type="button"
          aria-label="Replier la navigation"
        >
          <IconMenuBurger />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import IconFacebook from './Icons/IconFacebook.vue';
import IconTwitter from './Icons/IconTwitter.vue';
import IconLinkedin from './Icons/IconLinkedin.vue';
import IconInstagram from './Icons/IconInstagram.vue';
import IconPinterest from './Icons/IconPinterest.vue';
import IconYoutube from './Icons/IconYoutube.vue';
import IconMenuBurger from './Icons/IconMenuBurger.vue';
export default {
  name: 'TheHeader',
  components: {
    IconFacebook,
    IconTwitter,
    IconLinkedin,
    IconInstagram,
    IconPinterest,
    IconYoutube,
    IconMenuBurger,
  },
};
</script>

<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
header {
  background: var(--dark-primary);
  color: var(--white);
  padding: 20px 0;
}
.menu {
  overflow: hidden;
}
.menu__link {
  padding-right: 10px;
  color: var(--white);
  font-weight: 600;
  transition: color 300ms;
}
.menu__link:hover {
  color: var(--light-gray);
}

.menu__link--secondary {
  text-transform: uppercase;
  font-size: 0.65rem;
  font-weight: normal;
  color: var(--light-gray);
  transition: color 300ms;
}
.menu__link--secondary:hover {
  color: var(--white);
}
.menu__link--stretch {
  padding-right: 20px;
  padding-left: 20px;
}
.menu__icon {
  width: 20px;
  height: 20px;
  fill: var(--light-gray);
  transition: fill 300ms;
}
.menu__icon:hover {
  fill: var(--white);
}

.btn-menu {
  color: var(--white);
  background-color: transparent;
  padding-right: 20px;
}
</style>
