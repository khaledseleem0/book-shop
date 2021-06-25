import React,{useContext,useEffect, useState} from "react";
import {
  Link,
  Account,
  Logo,
  List,
  NavBarMenu,
  ToggleIcon,
  Avatar
} from "./navstyle";
import {UserInfo} from './../vars';

export default function Nav(props) {
  let user  = useContext(UserInfo) ;
  const [avatar,setAvatar] = useState(null) 
  window.addEventListener('scroll',(e)=>{
      if(window.pageYOffset >= 500 &&   document.querySelector('.menu') !== null ){
        document.querySelector('.menu').classList.add('fixed');

      } else if(document.querySelector('.menu') !== null ) {
        document.querySelector('.menu').classList.remove('fixed');

      }
  })
  useEffect(() => {
    setAvatar(user)

  }, [user])
  const HandelToggle = (e) => {
    const navbar = document.querySelector('.navbar');
    const Hum = document.querySelector('.hum');
    navbar.classList.toggle('toggle');
    Hum.classList.toggle('close');

  };
  return (
    <>
    <NavBarMenu className="menu">
    <ToggleIcon  onClick={(e)=> HandelToggle(e)} className="hum">
        <span></span>
        <span></span>
        <span></span>
    </ToggleIcon>
  <Account>
          <Link to="/account">
        
         <Avatar src={avatar !== null && avatar.photoURL !==  ""?  avatar.photoURL : process.env.PUBLIC_URL+"/assesst/images/user.svg"}>
            </Avatar> 
          </Link>
  </Account>
<List  className="navbar">
  <li>
    <Link to="/home">home</Link>
  </li>
  <li> 
    {console.log(avatar)}
  <Link to="/favorites"> favorites </Link>
  </li>
  <li>
    <Link to="/category">category</Link>
  </li>
  <li>
    <Link to="/clubs">clubs</Link>
  </li>
  <li>
    <Link to="/account">account</Link>
  </li>
</List>
        <Logo> Read It  </Logo>
     
    </NavBarMenu>
    </>
  );
}
