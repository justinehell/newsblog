import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages() {
  // see https://webpack.js.org/guides/dependency-management/#requirecontext
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  // console.log(locales) --> function webpackContext(req)
  // console.log(locales.keys()) --> Array [ "./en.json", "./fr.json" ]

  const messages = {};
  locales.keys().forEach((key) => {
    // "./en.json"
    // "./fr.json"

    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    // Array [ "en.", "en" ]
    // Array [ "fr.", "fr" ]

    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  // console.log(messages);
  //  {
  //    en:  { nav: {...},  pages: {...}, utils: {...} },
  //    fr:  { nav: {...},  pages: {...}, utils: {...} }
  //  }

  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
