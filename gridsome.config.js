// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Code & Design - Johan Dahl',
  siteUrl: "https://johandahl.com",
  siteDescription: "Writing and learning about code and design",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        baseDir: './content/blog',
        path: "*.md",
      }
    },
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug'
  },
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
