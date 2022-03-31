import React from "react";
import { BaseHeading } from "./BaseHeading";

/*  Create a component named Heading1, 
and wrap the BaseHeading component. */
/* Set the Rebass prop, as, to render as an HTML h1 element.
c. Set the Rebass prop, fontSize, to a three-item array that 
maps to indices in the default Rebass fontSizes array, 
and corresponds to the three default Rebass breakpoints.
d. Pass any props on to the BaseHeading component. */

const Heading1 = props => 
    <BaseHeading as='h1' fontSize={ [3, 4, 5]} {...props} /> /* font array-> will change font size based on screen size */
                                                /* spread operator-> ({...props}) */


    export { Heading1 as H1}