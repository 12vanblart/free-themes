// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com/",
    crossorigin: true,
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
  });

  head.meta.push({
    key: "og:description",
    name: "og:description",
    content: `Select two colors, get a gradient. Free simple CSS gradient generator.`,
  });

  head.meta.push({
    key: "twitter:description",
    name: "twitter:description",
    content: `Select two colors, get a gradient. Free simple CSS gradient generator.`,
  });

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });

  const opts = {};
  // Add Vuetify Options here ^^
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
