import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

/* Create a styled component named StyledButton that extends BaseButton. 
   We’ll use this component to inject theme styles, but for now we’ll 
   just leave it empty. 
 */
const StyledButton = styled(BaseButton)`
    ${ ( { theme, variant}) => theme.variants.iconButton[variant || 'primary']}

`
/*  Create a styled component named IconButton that wraps StyledButton. 
 */
/*  Destructure the icon prop and stuff the remaining (Rebass) props 
    into a rest parameter named rest. 
 */
/*  Clone the icon, passing along the rest parameter to the cloneElement method.
 */
/*  Return the StyledButton. Set the Rebase as prop to the cloned icon’s type 
   (which is a styled component), pass along the rest parameter, then set the className. 
 */
/*  Note: we’re setting the className in order to reapply any classes that may have been 
   attached to the props as a result extending and cloning; we will not be explicitly 
   setting the className prop when we use the component. 
*/
/* Note: As a styled component, IconButton is followed with backticks, though in 
  this case there are no styles, just a comment 
*/
export const IconButton = styled (({ icon, ...rest }) => {
    let clone = React.cloneElement(icon, rest)
    return <StyledButton as={clone.type} {...rest} className={rest.className} />
})`
    //We could add styles here, but it is not necessary.
    //The main reason this is a styled component is to wrap
    the styled icon passed in as a prop.
`
/* Define a defaultProp that sets the Rebass size prop to 24 
*/
IconButton.defaultProps = {
    size: 24
}

/* Define a required propType for the icon prop. 
*/
IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    variant: PropTypes.string
}