import styled from 'styled-components'
import { textColor, bgYello, paragraph, headline, secondarybgColor } from '../../styleConstants'

export const Container = styled.div`
background-color:${secondarybgColor};
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
export const LoginWrapper = styled.div`
width:40%;
height:70%;
background-color: white;
color: ${textColor};
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

h1 {
    font-family: 'Rock Salt', cursive;
    color: ${headline};
}

@media  (max-width: 600px) {
    width:90vw;
}
`
export const LoginCotainer = styled.div`

p {
    color:${paragraph};
    margin:15px 0;
    font-weight:600;
}
input{
    height:10%;
    width:100%;
    padding:15px;
}

@media  (max-width: 600px) {
    p {
         margin:10px 0;
    }
    input {
        padding:5px;
    }
    /* width:90vw; */
}
`
export const Logo = styled.div`
width:100px;
height:100px;
position:absolute;
top:0;
img {
    width:100%;
    height:100%;
}
`
export const LoginButton = styled.button`
    background-color: ${bgYello};
    color: ${headline};
    width:100%;
    margin-top:20px;
    height:70%;
    border:none;
    padding:20px;
    font-weight:600;
    cursor:pointer;
    font-size:1rem;
    transition: all 250ms ease-in;
    :hover {
        background-color:#ffcc00;
    }
`

export const CreateeAccount = styled.p`


text-align:center;
transition: all 250ms ease-in;
cursor:pointer;
:hover {
    border-bottom: 1px solid black;
}
`

