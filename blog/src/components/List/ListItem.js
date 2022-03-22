import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

/* Create a component named ListItem. Deconstruct 
children, then stuff any remaining props into a 
rest parameter. */

/* Return BaseContainer. Use the Rebass as prop 
to render the component as a li element.  Apply 
the rest props and wrap the value of the children prop. */

/*  (note parentheses after => because we are returning 
    BaseContainer implicitly, i.e., without 
    a return statement) */

export const ListItem = ({ children, ...rest}) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
)

ListItem.propTypes = {
    children: PropTypes.node.isRequired
}