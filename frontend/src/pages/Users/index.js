import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Img2 from "../../assets/img2.svg";
import Arrow from "../../assets/arrow.svg";
import Bin from "../../assets/bin.svg";

import * as C from "../../components/Components.styles";
import * as I from "./styles"

import axios from "axios";
import ParticleEffectButton from "react-particle-effect-button";

function Users() {


    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [isbutton, setButton] = useState(true);


    useEffect(() => {
        if (users) {
            setButton(false);
        } else {
            setButton(true);
        }
    }, []);


    useEffect(() => {
        async function fetch_users() {
            const { data: new_users } = await axios.get("http://localhost:3001/users")
            setUsers(new_users)

        }
        fetch_users()
    }, [users])

    async function delete_user(user_id) {
        await axios.delete(`http://localhost:3001/users/${user_id}`)

        const new_user = users.filter(user => user.id !== user_id)

        setUsers(new_user);
    };

    function Push() {
        history.push("/")
    };


    return (
        <I.Container>

            <C.ContainerItens is_blur={true}>

                <I.Image alt="Avatar" src={Img2} />
                <C.H1> Usuários </C.H1>
                <ul>
                    {users.map(user => (
                        <>{
                            user.name && user.age !== '' ?
                                <I.User key={user.id}>
                                  
                                    <p>{user.name}</p>
                                    <p>{user.age}</p>

                                    <button  onClick={() => delete_user(user.id)}>
                                        <img className="bin" alt="bin" src={Bin} />
                                    </button>

                                </I.User>
                                : null
                        }</>


                    ))
                    }
                </ul>
                <ParticleEffectButton
                    color='#ffff'
                    hidden={isbutton}
                >
                    <C.Button className="bom" is_back={true} onClick={Push}>
                        <img alt="Arrow" src={Arrow} /> Voltar
                    </C.Button>
                </ParticleEffectButton>

            </C.ContainerItens>

        </I.Container>
    );
}
export default Users