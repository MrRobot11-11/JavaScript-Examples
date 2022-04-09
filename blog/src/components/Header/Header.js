
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { H1 } from '../Heading'
import { Section } from '../Section'
import { Search } from 'styled-icons/feather'
import { IconButton } from '../Button'

/* Update the Outer component’s background style to use the 
new theme structure. You could continue using the prop parameter 
and just update the arrow function body to 
props.theme.variants.header.primary.backgroundColor, 
but I prefer destructuring the theme object */
const Outer = styled.header`
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor };
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0px;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
/* 
const H1 = styled.h1`
  margin: 0px;
` */

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: purple;
  }
`
/* Replace the “Search” text with the IconButton 
*/
/* Set the IconButton icon prop to the Search icon you imported above.
 */
const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Section flex>
        <Section width={11/12}>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
      </Section>
      <Section width={1/12}>
        <IconButton icon={<Search />} variant='contrast' /> {/* On the IconButton, 
                                              set the variant prop 
                                                to contrast */}
        </Section>
      </Section>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }