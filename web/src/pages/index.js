import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello. Let's do a webby.</h1>
    <p>
      Here's what the Encyclopedia Galactica has to say about alcohol. It says
      that alcohol is a colourless volatile liquid formed by the fermentation of
      sugars and also notes its intoxicating effect on certain carbon-based life
      forms.
    </p>
    <p>
      The Hitchhiker's Guide to the Galaxy also mentions alcohol. It says that
      the best drink in existence is the Pan Galactic Gargle Blaster.
    </p>
    <p>
      It says that the effect of a Pan Galactic Gargle Blaster is like having
      your brains smashed out by a slice of lemon wrapped round a large gold
      brick.
    </p>
    <p>
      The Guide also tells you on which planets the best Pan Galactic Gargle
      Blasters are mixed, how much you can expect to pay for one and what
      voluntary organizations exist to help you rehabilitate afterwards.
    </p>
  </Layout>
)

export default IndexPage
