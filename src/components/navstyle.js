 import styled from 'styled-components';
 import {NavLink} from 'react-router-dom'
 import {Small} from './vars';
 const  light='#ffefcf',
       light2='#4a393396 ';
export const NavBar = styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
flex-direction: row-reverse;
font-weight: 900;
@media (max-width:${Small}px){
    flex-wrap:wrap;
}
`
// info 
export const Info = styled.div`
width: 25%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row-reverse;
@media (max-width:${Small}px){
    width: 30%;

}
`
// languages
export const Banel = styled.div`
position:relative;
`

export const Lan = styled.div`
padding: 10px;
border-radius: 24px;
width: 40px;
text-align: center;
height: 40px;
text-transform:capitalize;
color:${light2};
cursor:pointer;


`
export const Languages = styled.div`
background: #fff;
box-shadow: 1px 20px 15px 7px rgb(255 210 115 / 20%);
    border: 1px solid rgb(255 208 115);
padding: 10px;
border-radius: 5px;
position: absolute;
right: 0px;
width: 100px;
margin-top: 10px;
opacity:0;
transition: .5s;
transform:scale(0);
z-index:123;
`
export const Option = styled.div`
padding:10px 0px ;
display: flex;
align-items: center;
justify-content: space-evenly;
text-transform:capitalize;
color:rgb(153 143 140);
a svg{
    margin-right:5px
}
`

export const Logo = styled.div`
padding:10px 0;
width:25%;
text-align:center;
display: flex;
  justify-content: center;
  align-items: center;
  text-transform:uppercase;
  font-weight:900;
  @media (max-width:${Small}px){
    width: 100%;

}
`

export const Setting = styled(Languages)`
width:150px;
`
export const Account  = styled(Banel)`

`  

export const AccountImg = styled(Lan)`
background:#ffefcf;
`

// search
export const Search = styled.div`
width: 50%;
display: flex;
align-items: center;
padding: 0 10px;
border-radius: 4px;
background:${light};
@media (max-width:${Small}px){
    width: 70%;

}
`
export const InputSearch = styled.input`
width: 100%;
padding: 10px 20px;
background: transparent;
border: none;
outline: none;

`
// favourites
export const Fav = styled.div`
padding:10px;

`

export const Links = styled.div`
`
export const List = styled.ul`
list-style:none;
display:flex;
justify-content:center;
padding:10px;
li{
position:relative;

}
`
export const Link = styled(NavLink)`
text-decoration:none;
padding:10px;
display:inline-flex;
text-transform:capitalize;
color:${light2} ;
transition:0.5s;
overflow-x:hidden;
align-items: center;
font-weight: 900;
span{
    color:${light2} ;

}
&::after{
    content: "";
    width: 5px;
    height: 5px;
    background-color:#ffd073  !important;
    position: absolute;
    right: 200%;
    bottom: 0;
    border-radius: 50%;
    transition:0.5s;
    opacity:0;
}
`
export const Menu = styled(Setting)`

`

export const Center  =styled.span`
display:flex;
align-items: flex-end;
text-decoration:none;
padding:10px;
display:inline-flex;
text-transform:capitalize;
color:${light2} ;
transition:0.5s;
overflow-x:hidden;
align-items: flex-end;
font-weight: 900;
span{
    color:${light2} ;

}
`