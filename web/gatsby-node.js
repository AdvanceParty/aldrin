// Generate pages at compile time

// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const vineTemplate = path.resolve("./src/templates/vine.js")
//   const result = await graphql(`
//     query {
//       allSanityVine {
//         nodes {
//           slug
//           id
//         }
//       }
//     }
//   `)

//   const { allSanityVine } = result.data
//   const vines = allSanityVine.nodes.map(item => ({
//     ...item,
//     component: vineTemplate,
//   }))

//   vines.forEach(page => {
//     createPage({
//       path: `/${page.slug}/`,
//       component: `${page.component}`,
//       context: {
//         id: `${page.id}`,
//       },
//     })
//   })
// }
