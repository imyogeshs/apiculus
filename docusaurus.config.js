// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apiculus',
  tagline: 'For the Service Providers and the Subscribers.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apiculus.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
         sidebarPath: require.resolve('./sidebars.js'),
		  // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
    //      editUrl:
      //      'https://github.com/imyogeshs/apiculus',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
		  
	
		
		
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
    //      editUrl:
      //      'https://github.com/imyogeshs/apiculus',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        
		theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		docs: {
      sidebar: {
        autoCollapseCategories: true,
		hideable: true,

      },
	 
	  
    },
      // Replace with your project's social card
      image: 'img/apiculus-social-card.png',
      navbar: {
        title: '',
		// hideOnScroll: true,
        logo: {
          alt: 'Apiculus',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar1',
            position: 'left',
            label: 'Service Providers',
			position: "left",
          },
		  {
            type: 'docSidebar',
            sidebarId: 'sidebar4',
            position: 'right',
            label: 'Release Notes',
          },
		   {
            type: 'docSidebar',
            sidebarId: 'sidebar3',
            position: 'right',
            label: 'Management APIs',
          },
		   {
            type: 'docSidebar',
            sidebarId: 'sidebar2',
            position: 'left',
            label: 'Subscribers',
          },
    //      {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://swagger.apiculus.io',
            label: 'Global APIs',
            position: 'right',
          },
		  
		  {
          to: 'https://try.apiculus.io', // Change to the desired link
          label: 'Try Apiculus', // The label of your button
          position: 'right',
          className: 'button button--primary', // Add button classes here
        },
		  	  
		  ],
      },
    /*  footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Service Providers',
                to: '/docs/intro',
              },
			  			  {
                label: 'Release Notes',
                to: '/docs/category/release-notes',
              },
			  {
                label: 'Subscribers',
                to: '/docs/Subscribers/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apiculus, Inc.`,
      },
	  */
	  
	  // Algolia Search is here.
	  
	  algolia: {
      appId: "LR4IO8TKPQ",
      apiKey: "86496eb0535959e8d78cff40e68ba3b8",
      indexName: "apiculus",
      contextualSearch: true,
      searchParameters: {
      facetFilters: ["keywords"]
      }
    },
	
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

