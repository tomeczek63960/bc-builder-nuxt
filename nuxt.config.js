import { resolve } from 'path';
import build from './config/build';
import buildModules from './config/buildModules';
import head from './config/head';
import css from './config/css';
import modules from './config/modules';
import axios from './config/axios';
import toast from './config/toast';
import env from './config/env';
import proxy from './config/proxy';
import sentry from './config/sentry';

export default {
  ssr: false,
  loading: false,
  components: false,
  parallel: true,
  cache: true,
  hardSource: true,
  target: 'server',
  /**
   ** Global Env Varialbes
   */
  env,
  alias: {
    '@builderComponents': resolve(__dirname, './builderComponents')
  },
  /*
   ** Headers of the page
   */
  head,
  /*
   ** Global CSS
   */
  css,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vueAwesomeSwiper', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  // Doc: https://github.com/nuxt-community/eslint-module
  buildModules,
  /*
   ** Nuxt.js modules
   */
  // Doc: https://axios.nuxtjs.org/usage
  modules,
  // Sentry configuration
  sentry,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios,
  /*
   ** Build configuration
   */
  build,
  toast,
  proxy,
  serverMiddleware: [{ path: '/', handler: '~/api' }]
};
