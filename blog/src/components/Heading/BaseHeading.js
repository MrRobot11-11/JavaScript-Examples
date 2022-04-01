/* Import the Rebass Heading component to make our component 
        inherit the Rebass functionality.*/

import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass'

/* Create a component named BaseHeading, 
    then wrap the Heading component.
Wrap the children prop 
    (i.e., any text or element wrapped by our heading).
Stuff any additional (Rebass) props into a rest parameter 
    named rest, then pass them to the Rebass Heading component 
        by unpacking them using the spread operator. 
            *Note that the rest parameter and spread 
                operator look the same, but behave differently, 
                    as indicated by the context. */
const BaseHeading = ({ children, ...rest }) => /* rest parameter */ /* Using destructuring to pull out components and stuff rest into ...rest */
    <Heading {...rest}> {/* spread operator */}
        { children }    
    </Heading>

/* Define a required propType for the children prop. */
BaseHeading.propTypes = {
    children: PropTypes.node.isRequired
}

export { BaseHeading }