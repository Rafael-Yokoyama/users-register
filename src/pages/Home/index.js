import React, { useState, useRef } from "react";

import Img from "../../assets/img1.svg";
import Arrow from "../../assets/arrow.svg";

import * as C from "../../components/Components.styles";
import * as I from "./styles"
import axios from "axios"; 
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";




function Home() {
    const [users, setUsers] = useState([]);
    const input_name = useRef();
    const input_age = useRef();
    const History = useHistory();


    async function add_new_user() {
        const { data: new_user } = await axios.post("http://localhost:3001/users", {
            name: input_name.current.value,
            age: input_age.current.value,
        })
        if(input_name.current.value !=='' || input_age.current.value !=='' ){

            setUsers([...users, new_user]);
            
                History.push("/users")
                Swal.fire(
                    'Cadastro utilizado com sucesso ✔',           
                    'success'
                )
                  
        }else{
            Swal.fire(
                'Não foi possivel cadastrar 😢',
                'preencha todos os campos',
                'error'
            )
              
        }
    
    };
    


    return (
        <I.Container>          

            <C.ContainerItens>

            <I.Image alt="Logo-image" src={Img} />

                <C.H1> Olá! </C.H1>
               
               
                <I.Input_label> Nome </I.Input_label>
                <I.Input ref={input_name} placeholder="Nome" />

                <I.Input_label> Idade </I.Input_label>
                <I.Input ref={input_age} placeholder="Idade" type="number" />

                <C.Button onClick={add_new_user}>
                    Cadastrar <img alt="Arrow" src={Arrow} />
                </C.Button>

            </C.ContainerItens>

        </I.Container>
    );
}
export default Home