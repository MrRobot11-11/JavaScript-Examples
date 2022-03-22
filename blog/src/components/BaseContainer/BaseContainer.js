import React from "react";
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

/* Create a component named BaseContainer. Deconstruct children and flex 
(with a default value of false) from props, then stuff any remaining 
props into a rest parameter. */

/* Return either a Rebass Flex or a Rebass Box, depending on the value of 
the flex prop. This returned component should wrap the value of the 
children prop. Apply the rest props to the component, which will 
effectively deconstruct and apply any props that may have been passed. */

/* (note curly braces after => because we are explicitly returning 
    Component in the body) */

export const BaseContainer = ({ children, flex = false, ...rest}) => {
    let Component = flex ? Flex : Box
    return <Component { ...rest }>{children}</Component>
}

/* Specify prop types for the BaseContainer, 
including flex (optional), as (optional), 
and children (required). */

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    as: PropTypes.string,
    children: PropTypes.node.isRequired
}