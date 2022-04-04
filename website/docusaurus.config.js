const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  navbar: {
    title: 'Tailchat',
    logo: {
      alt: 'Tailchat Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: '文档',
      },
      {to: '/blog', label: '博客', position: 'left'},
      {
        href: 'https://github.com/msgbyte/tailchat',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    // links: [
    //   {
    //     title: 'Docs',
    //     items: [
    //       {
    //         label: 'Tutorial',
    //         to: '/docs/intro',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Community',
    //     items: [
    //       {
    //         label: 'Stack Overflow',
    //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //       },
    //       {
    //         label: 'Discord',
    //         href: 'https://discordapp.com/invite/docusaurus',
    //       },
    //       {
    //         label: 'Twitter',
    //         href: 'https://twitter.com/docusaurus',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'More',
    //     items: [
    //       {
    //         label: 'Blog',
    //         to: '/blog',
    //       },
    //       {
    //         label: 'GitHub',
    //         href: 'https://github.com/facebook/docusaurus',
    //       },
    //     ],
    //   },
    // ],
    copyright: `Copyright © ${new Date().getFullYear()} MsgByte, Inc. Built with Docusaurus and ❤.`,
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  zoom: {
    selector: '.markdown img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
  }
}

/** @type {import('@docusaurus/preset-classic').Options} */
const presetClassicOptions = {
  docs: {
    sidebarPath: require.resolve('./sidebars.js'),
    // Please change this to your repo.
    editUrl:
      'https://github.com/msgbyte/tailchat/edit/master/website/',
  },
  blog: {
    postsPerPage: 5,
  },
  // blog: false,
  theme: {
    customCss: require.resolve('./src/css/custom.css'),
  },
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tailchat',
  tagline: '一个插件化易拓展的开源 IM 应用',
  url: 'https://tailchat.msgbyte.com', // TODO: 待修改成文档主页
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'msgbyte', // Usually your GitHub org/user name.
  projectName: 'tailchat', // Usually your repo name.
  themeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      presetClassicOptions
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ]
};
