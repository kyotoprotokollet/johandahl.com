// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// Changes here require a server restart.

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/01-settings/_settings.scss')
      ],
    })
}

module.exports = {
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })
    },
    siteName: 'Code & Design - Johan Dahl',
    siteUrl: 'https://johandahl.com',
    siteDescription: 'Writing and learning about code and design',
    icon: './src/favicon.svg',
    plugins: [
        {
            use: 'gridsome-plugin-gtm',
            options: {
                id: 'GTM-5Q52RQX',
                enabled: true,
                debug: true,
            },
        },
        {
            use: 'gridsome-plugin-robots-txt',
        },
        {
            use: '@gridsome/plugin-sitemap',
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BlogPost',
                baseDir: './content/blog',
                path: '*.md',
            },
        },
    ],
    templates: {
        BlogPost: '/blog/:year/:month/:day/:slug',
    },
    transformers: {
        remark: {
            plugins: ['@gridsome/remark-prismjs'],
        },
    },
}
