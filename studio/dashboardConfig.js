export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6de7dec0835acf5d965b07',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j5kuzk51',
                  apiId: '7f237f9c-526e-4e4f-9704-25f562c2bcd7'
                },
                {
                  buildHookId: '5d6de7de86740044ff2b9936',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-za9nb1fh',
                  apiId: 'f3a37556-bb8a-4b83-95e1-01f8c4396812'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andy-guerrilla/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-za9nb1fh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
