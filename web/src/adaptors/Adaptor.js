export default class Adaptor {
  static fluidImage = imageNode => imageNode.asset.fluid
  static thumbnailImage = thumbnailNode => thumbnailNode.asset.fixed
  static mediaAssetDetails = detailsNode => {
    const { alt, caption, title } = detailsNode
    return { alt, caption, title }
  }
}
