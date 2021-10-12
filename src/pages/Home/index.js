import React, { useState, useRef } from "react";


import Img from "../../assets/img1.svg";
import Arrow from "../../assets/arrow.svg";

import * as C from "../../components/Components.styles";
import * as I from "./styles"
   



function Home() {


    return (
        <I.Container>          

            <C.ContainerItens>


            <I.Image alt="Logo-image" src={Img} />

                <C.H1> Olá! </C.H1>

                
                <I.Input_label> Nome </I.Input_label>
                <I.Input  placeholder="Nome" />

                <I.Input_label> Idade </I.Input_label>
                <I.Input placeholder="Idade" type="number" />

                <C.Button >
                    Cadastrar <img alt="Arrow" src={Arrow} />
                </C.Button>

            </C.ContainerItens>

        </I.Container>
    );
}
export default Home