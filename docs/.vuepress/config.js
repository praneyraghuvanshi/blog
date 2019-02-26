//const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'DEVNAGRI',
  description: 'We Celebrate INDIAN Languages',
  dest: 'DEVNAGRI',
  base: '/docs/',
  head: [
    ['link', { rel: 'icon', href: `/cropped-fav-32x32.png`, sizes: `32x32` }],
    ['link', { rel: 'icon', href: `/cropped-fav-192x192.png`, sizes: `192x192` }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'FourtekIT/devnagri-docs',
    editLinks: true,
    logo: '/logo-dark.png',
    docsDir: 'docs',
    nav: [
      /*{
        text: 'Home',
        link: 'http://www.devnagri.com',
        
      },*/
      {
        text: 'Guide',
        link: 'user',
      },
    ],
    sidebar: 
      [
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            'user',
            'glossary',
          ]
        },
        {
          title: 'Translator Guide',
          collapsable: false,
          children: [
            'translator'
          ]
        },
        {
          title: 'Developer Guide',
          collapsable: false,
          children: [
            'Api',
            'IntelliJPlugin'
          ]
        }
      ]
    
  }
}
