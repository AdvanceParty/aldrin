# Doc your Schema!

The graph module does a nice job of generating interactive html docs from your GraphQL endpoint. Use npx and boom!

`npx @2fd/graphdoc --force -e SANITY_GRAPHQL_ENDPOINT -o ./PATH/TO/SAVE/DOCS`

## Conventions in the Schema

#### Collections vs Composites

- Collections contain references to alreadt existing content of a specicific type -- eg: imagePodCollection, royalsPersonCollection
- Composites, such as carousel, are self-contained data built from multiple types.
