<template>
  <header class="px-0 py-5 bg-dark text-white">
    <nav class="wrapper">
      <div id="menu-top" class="flex justify-between items-center py-3">
        <ul class="overflow-hidden flex justify-between">
          <li v-for="icon in socialNetworkIcons" :key="icon.id" class="pr-3">
            <a :href="icon.href" target="_blank" :title="icon.title">
              <component
                :is="icon.id"
                class="w-5 h-5 transition duration-300 transform fill-current text-light-gray hover:text-white"
              />
            </a>
          </li>
        </ul>
        <ul id="menu-top-list" class="overflow-hidden flex justify-between">
          <li>
            <MenuNavigationLink
              secondary
              :to="{ name: 'home' }"
              title="A propos"
              linkTitle="a propos"
            />
          </li>
          <li>
            <MenuNavigationLink
              secondary
              :to="{ name: 'home' }"
              title="Mes favoris"
              linkTitle="favoris"
            />
          </li>
        </ul>
      </div>
      <div id="menu-bottom" class="flex justify-between items-center py-3">
        <router-link to="/" title="retour acceuil">
          <img
            id="logo"
            src="../assets/images/logo.svg"
            alt="logo de News Blog"
          />
        </router-link>
        <ul
          id="menu-bottom-list"
          class="overflow-hidden flex justify-between items-center"
        >
          <li>
            <MenuNavigationLink
              :to="{ name: 'home' }"
              title="Actualités"
              linkTitle="actualités"
            />
          </li>
          <li>
            <MenuNavigationLink
              :to="{ name: 'home' }"
              title="Technologies"
              linkTitle="technologies"
            />
          </li>
          <li>
            <MenuNavigationLink
              :to="{ name: 'home' }"
              title="Sciences"
              linkTitle="sciences"
            />
          </li>
          <li>
            <MenuNavigationLink
              :to="{ name: 'home' }"
              title="Divertissements"
              linkTitle="diverstissements"
            />
          </li>
        </ul>
        <button
          id="toggle-menu-btn"
          class="bg-transparent pr-5 hidden"
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
import MenuNavigationLink from './Navigation/MenuNavigationLink.vue';

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
    MenuNavigationLink,
  },
  computed: {
    socialNetworkIcons() {
      return [
        {
          href: 'https://facebook.com',
          title: 'lien vers le site facebook.com',
          id: 'IconFacebook',
        },
        {
          href: 'https://twitter.com',
          title: 'lien vers le site twitter.com',
          id: 'IconTwitter',
        },
        {
          href: 'https://linkedin.com',
          title: 'lien vers le site linkedin.com',
          id: 'IconLinkedin',
        },
        {
          href: 'https://instagram.com',
          title: 'lien vers le site instagram.com',
          id: 'IconInstagram',
        },
        {
          href: 'https://pinterest.com',
          title: 'lien vers le site pinterest.com',
          id: 'IconPinterest',
        },
        {
          href: 'https://youtube.com',
          title: 'lien vers le site youtube.com',
          id: 'IconYoutube',
        },
      ];
    },
  },
};
</script>
