import styled from 'styled-components'
import { secondarybgColor, textColor } from '../../styleConstants'

export const Container = styled.div`
width:100%;
background-color:${secondarybgColor};
color: ${textColor};
`
export const Menu = styled.div`
height:50px;
display:flex;
align-items:center;
justify-content:center;
padding: 10px;
`

export const Logo = styled.h1`
    font-family: 'Rock Salt', cursive;
    font-size:25px;
    flex:1;
`
export const MenuWrapper = styled.div`
nav{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
}
/* span {
    margin-right:20px;
} */
`
