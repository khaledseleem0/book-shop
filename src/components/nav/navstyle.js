 import styled from 'styled-components';
 import {NavLink} from 'react-router-dom'
 import {Colors , Screens} from '../vars';


  export const NavBarMenu = styled.div`
    padding:10px 50px;
    transition:0.4s;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background:#fff;
    flex-direction: row-reverse;
    z-index: 123123;
    @media (max-width:${Screens.tablet}){
    padding:10px;
    display:flex ;

}
`
export const List = styled.ul`
list-style:none;
display:flex;
justify-content:center;
padding:10px 10px ;

@media (max-width:${Screens.tablet} ){
    padding: 10px 0px;
    display: flex;
    flex-flow: column;
    opacity:0;
    background:#fff;
    position: absolute;
    right: 0px;
    left:0px;
    z-index: -1;
    transition:0.5s;
    top: -500% ;
    overflow: hidden;
    box-shadow:0 14px 13px 5px #cccccc45;
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
}


li:last-of-type{
    display:none;
    @media (max-width:${Screens.tablet} ){
        display:inline-block;

}

}

li{
    position:relative;
}

`

export const Logo = styled.p`
padding:10px 0;
text-align:center;
  text-transform:uppercase;
  font-weight:900;
  background: #fff;
  color:${Colors.main};
`


export const Account  = styled.div`
width:50px;
height:50px;

a{
    padding:0px;
    display: block;
    width: 100%;
    height: 100%;

}
@media (max-width:${Screens.tablet} ){
    display:none
}
`  

export const Link = styled(NavLink)`
text-decoration:none;
padding:10px;
display:inline-flex;
text-transform:capitalize;
color:#393e4691 ;
overflow-x:hidden;
align-items: center;
font-weight: 900;
transition: 1.5s;
@media (max-width:${Screens.tablet} ){
    transform: translateY(-600%);
    opacity: 0;
}
&::after{
    content: "";
    width: 50%;
    height: 5px;
    background-color:#393e46  !important;
    position: absolute;
    transform: translateX(00%) ;
    bottom: 0;
    border-radius: 15px;
    transition:0.5s;
    opacity:0;
    @media (max-width:${Screens.tablet} ){
        display:none;
    }

}
`



export const ToggleIcon = styled.div`
     width: 40px;
    border-radius: 4px;
    padding: 4px;
    display: none;
    justify-content: space-around;
    align-content: space-around;
    flex-direction: column;
    height: 40px !important;
    & > span{
        width:100%;
        height:5px;
        margin:4px 0px;
        background:#393e46;
        display: block;
        transform: rotate(0) translate(0);
        opacity:1;
        transition:.4s;

    };
@media (max-width:${Screens.tablet} ){
    display:flex;
}
`

export const Avatar = styled.div`
        width:100%;
        height:100%;
        border-radius:100%;
        background:url(${props=>props.src});
        background-repeat: no-repeat;
        background-size:cover;
`;