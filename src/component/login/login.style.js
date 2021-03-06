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


@media  (max-width: 800px) {
    width:90vw;
    h1 {
        font-size:30px;
    }
}
`
export const LoginCotainer = styled.div`
display: flex;
flex-direction:column;
/* align-items:center; */
justify-content:center;
p {
    color:${paragraph};
    margin:15px 0;
    font-weight:600;
}
input{
    /* width:80%; */
    padding:10px;
    border:none;
    border:1px solid black;
}

@media  (max-width: 800px) {
    p {
         margin:5px 0;
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
    /* width:100%; */
    margin-top:20px;
    height:70%;
    border:none;
    padding:15px;
    font-weight:600;
    cursor:pointer;
    font-size:1rem;
    transition: all 250ms ease-in;
    :hover {
        background-color:#ffcc00;
    }

    @media  (max-width: 800px) {
     padding:10px;
     font-size:16px;
    }
`

export const CreateeAccount = styled.p`
position: relative;
  /* display: inline-block; */
text-align:center;
transition: all 250ms ease-in;
cursor:pointer;

::after {
	/* position: absolute; */
    /* left:50%; */
    display:block;
    width:0;
    bottom:0;
	content: '';
	height: 2px;
    background: ${bgYello};
    font-weight:600;
    transition: all .1s ease-in-out;
}
:hover:after {
  width: 100%;
  /* margin-left: 200px; */
}
`

