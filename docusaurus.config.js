// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eri-nyannyan',
  tagline: 'Calckey 테스트 인스턴스',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://social.astar.moe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/extras/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aaaadev', // Usually your GitHub org/user name.
  projectName: 'docs-social', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cat_3d.png',
      navbar: {
        title: 'Eri-nyannyan',
        logo: {
          alt: 'from fluentui-emoji by Microsoft',
          src: 'img/cat_3d.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'Home',
                href: 'https://social.astar.moe',
              }
            ]
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: 'docs/intro',
              },
              {
                label: 'Guide',
                to: 'docs/category/%EF%B8%8F-유저-가이드',
              },
              {
                label: 'ToS',
                to: 'docs/tos',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aaaadev/docs-social',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eri-nyannyan moderators. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
