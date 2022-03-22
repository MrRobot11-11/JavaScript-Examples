import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

/* Create a component named List. Deconstruct children, 
then stuff any remaining props into a rest parameter. */

/* Return the BaseContainer. Pass it the flex prop to 
give it the Rebase Flex container behaviors. Use the 
Rebass flexDirection, mx, and as props to set styles 
and render the component as a ul element. Apply the 
rest props and wrap the value of the children prop. */


/* (note parentheses after => because we are returning 
BaseContainer implicitly, i.e., without a return statement) */

export const List = ({ children, ...rest}) => (
    <BaseContainer
    flex
    flexDirection='column'
    mx='auto'
    as='ul'
    {...rest}
    >
    {children}

    </BaseContainer>
)

List.propTypes = {
    children: PropTypes.node.isRequired
}