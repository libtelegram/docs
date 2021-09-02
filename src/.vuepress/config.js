const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'LibTelegram',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { property: 'og:title', content: 'LibTelegram' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'LibTelegram is a modern framework for building Telegram Bots'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://libtelegram.martilion.es/' }],
    ['meta', { property: 'og:image', content: 'https://libtelegram.martilion.es/og-logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600;display=swap',
        rel: 'stylesheet'
      }
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'libtelegram/libtelegram',
    editLinks: false,
    docsDir: 'libtelegram/docs',
    editLinkText: '',
    lastUpdated: false,
    logo: '/Logo.svg',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
          ]
        },
        {
          title: 'Helpers',
          collapsable: false,
          children: [
            'helpers-install',
            'inline-menu'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    lineNumbers: true,
  },
}
