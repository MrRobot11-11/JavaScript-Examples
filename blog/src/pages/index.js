import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from "../components/List"

/* Use the Rebass width prop to specify an array of proportional 
width values corresponding to default breakpoints (predefined by 
  Rebass, but we will override these breakpoint values in our theme later) */

/*Use the Rebass p prop to specify a padding value that corresponds with 
the third value in the default space array (again, predefined by Rebass, 
  but overridable) */

  /* Replace li with ListItem. Use the Rebass p prop to specify a padding value */

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <List width={[1, 1/2, 2/3]} p={2}>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <ListItem p={3}>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              alt="test"
            />
          </div>
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
        </ListItem>
      ))
    }
    </List>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
            )
          }
        }
      }
    }
  }
`