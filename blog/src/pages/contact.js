import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data }) => { //Destructure data to get name, company, address
    const { name, company, address } = data.site.siteMetadata.contact; //structure of the query-> where the query comes from
    return (  //Grouping html that we're going to return
        <Layout>
            <Seo title="Contact" />
            <h1>Contact Us</h1>
            <p>Please send all inquiries to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif", "png"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <Link to="/">Home</Link>
            </Layout>
        )
}

export default Contact  //Have to export so build engine can access it
                                
/*Running query through function graphgl() */
export const query = graphql` 
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                    address
                }
            }
        }
    }
`