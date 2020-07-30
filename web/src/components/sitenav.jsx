import { Link } from "gatsby"
import React from "react"

const Sitenav = () => (
  <nav className="siteNav">
    <ul>
      <li>
        <Link to="/examples/imagePodSamples">Image Pods</Link>
      </li>
      <li>
        <Link to="/examples/personSamples">People</Link>
      </li>
    </ul>
  </nav>
)

export default Sitenav
