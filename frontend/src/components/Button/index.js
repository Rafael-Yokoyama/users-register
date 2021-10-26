import React from "react";

import * as C from "./Components.styles.js";

function Button({children, ...props}) {
    
    return (
        <C.Button {...props} > {children} </C.Button>
    )
}

export default Button