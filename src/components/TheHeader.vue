<template>
  <header class="px-0 py-5 bg-dark text-white max-h-96">
    <nav class="max-w-screen-xl my-0 mx-5 md:mx-10 xl:m-auto">
      <div class="hidden sm:flex sm:justify-between sm:items-center sm:py-3">
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
      <div
        class="flex justify-between items-center py-3 flex-wrap lg:flex-nowrap"
      >
        <router-link to="/" title="retour acceuil">
          <img
            src="../assets/images/logo.svg"
            alt="logo de News Blog"
            class="w-56 sm:w-max"
          />
        </router-link>
        <ul
          class="my-4 lg:my-0 overflow-hidden order-last w-full lg:w-max lg:flex items-center transition-all ease-in-out duration-300"
          :class="{
            'max-h-72': isMenuBurgerClicked,
            'max-h-0 lg:max-h-72': !isMenuBurgerClicked,
          }"
        >
          <li
            v-for="menuLink in menuNavigationLinks"
            :key="menuLink.title"
            class="pr-3 lg:mb-0"
            :class="{
              'mb-3':
                menuLink != menuNavigationLinks[menuNavigationLinks.length - 1],
            }"
          >
            <MenuNavigationLink
              :to="menuLink.to"
              :title="menuLink.title"
              :linkTitle="menuLink.linkTitle"
            />
          </li>
        </ul>
        <button
          class="bg-transparent block pr-5 order-1 lg:hidden"
          type="button"
          aria-label="Replier la navigation"
          @click="isMenuBurgerClicked = !isMenuBurgerClicked"
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
  data() {
    return {
      isMenuBurgerClicked: false,
    };
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
    menuNavigationLinks() {
      return [
        {
          to: { name: 'home' },
          title: 'Actualités',
          linkTitle: 'actualités',
        },
        {
          to: { name: 'home' },
          title: 'Technologies',
          linkTitle: 'technologies',
        },
        {
          to: { name: 'home' },
          title: 'Sciences',
          linkTitle: 'sciences',
        },
        {
          to: { name: 'home' },
          title: 'Divertissements',
          linkTitle: 'divertissements',
        },
      ];
    },
  },
};
</script>
