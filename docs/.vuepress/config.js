module.exports = {
  theme: 'vuepress-theme-something',

  title: "Hello, VuePress Theme Something ",
  description: 'Just playing around',
  
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
  ],

  themeConfig: {
    logo: '/avatar.jpg',
    author: 'vczyh',

    nav: [
      { text: '分类1', link: '/category1/' },
      { text: '分类2', link: '/category2/' },
      { text: '标签', link: '/tags/', home: true },
      { text: '归档', link: '/archive/' },
      { text: '404', link: '/notfound/' },
    ],

    contact: {
      "github": "https://github.com/vczyh",
      "mail": "2939531323@qq.com",
      "qq": "2939531323"
    }
  }
}