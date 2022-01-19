import styled from 'styled-components';
import {AuthContext} from '../contexts/Auth_Context'
import {useContext } from 'react';

const Div = styled.div`
    display : flex;
    justify-content : space-between;
    margin : auto 20px;
    &  button{
        margin-top : 20px;
        font-size : 20px;
        background : #0139d4;
        color : white;
        padding : 3px 10px;
        border-radius: 4px;
    }
`

export const Navbar = ()=>{
    const {token, handleToken} = useContext(AuthContext)
    return(
        <Div>
            <h2>Auth Context</h2>
            <div>
                <button onClick={ handleToken } > {token ? "Logout" : "Login" }</button>
            </div>
            
        </Div>
    )
}