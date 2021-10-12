import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Img2 from "../../assets/img2.svg";
import Arrow from "../../assets/arrow.svg";
import Bin from "../../assets/bin.svg";

import * as C from "../../components/Components.styles";
import * as I from "./styles"

function Users() {


    return (
        <I.Container>

            <C.ContainerItens is_blur={true}>
                
                <I.Image alt="Avatar" src={Img2} />
                <C.H1> Usuários </C.H1>

                <ul>
                    <I.User >

                        <button>
                            <img alt="bin" src={Bin} />
                        </button>
                    </I.User>

                </ul>

                <C.Button >
                Voltar<img alt="Arrow" src={Arrow} />
                </C.Button>

            </C.ContainerItens>

        </I.Container>
    );
}
export default Users