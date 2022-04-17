import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'rebass'
import styled from 'styled-components'

/* Create a styled component named Reset that 
 * extends the Rebass Button and defines button reset styles.
 */

const Reset = styled(Button)` /* When the component is not an official html component, 
                                this is the syntax that we use to pass it in 
                              */
    background: none;
    box-shadow: none;
    font-weight: normal;
    border-radius: 0;
    cursor: pointer;
`
/* Create a component named BaseButton that wraps 
 * the Reset component.
 */
/* Destructure the children prop and stuff the remaining 
  (Rebass) props into a rest parameter named rest. Pass the 
  rest parameter to the Reset button, which will allow consumers 
  to apply Rebass props to the underlying Rebass button.
 */
export const BaseButton = ({ children, ...rest}) => 
<Reset {...rest}>{children}</Reset>

/* Define a required propType for the children prop.
 */
BaseButton.propTypes = {
    children: PropTypes.node.isRequired
}