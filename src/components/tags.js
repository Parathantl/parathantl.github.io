import React from "react"
import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

const Tags = props => {
  // If the current post does not have any tags then stop rendering the component.
  if (!props.listOfTags.length) {
    return null
  }

  // Display a list of tags for the current blog post.
  return (
    <p>
        Tags:{" "}
        {props.listOfTags.map((tag, index) => (
          <Link to={`/tags/${kebabCase(tag)}/`} key={index}>
            {tag + " | "}
          </Link>
        ))}
    </p>
  )
}

export default Tags