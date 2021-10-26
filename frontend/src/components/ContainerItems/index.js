import React from "react"

import * as C from "./Components.styles.js";

function ContainerItens({ children, is_blur }) {


    return (
        <C.Container is_blur={is_blur} >{children}</C.Container>
    )
}

export default ContainerItens