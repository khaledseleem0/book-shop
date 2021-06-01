import {
  Center,
  Menu,
  Link,
  Fav,
  Info,
  Account,
  NavBar,
  Logo,
  Search,
  Languages,
  Lan,
  Option,
  AccountImg,
  Setting,
  InputSearch,
  Banel,
  Links,
  List,
} from "./navstyle";
import React from "react";
import { FaCog, FaSearch, FaRegHeart, FaAngleDown, FaSignOutAlt } from "react-icons/fa";
export default function Nav() {
  const HandelToggle = (e) => {
    e.target.classList.toggle('active');
    let clicked = e.target.getAttribute('data-toggle')
    let x = document.querySelectorAll("div");
x.forEach(element => {

  let y =  element.getAttribute('data-toggle');
    if(clicked != null && y != null && y === clicked){
        element.classList.toggle('toggle')
    }
    
});

  };
  return (
    <>
    <div className="container">
    <NavBar>
        <Info>
          <Banel>
            <Lan  data-toggle="menu-lang" onClick={(e) => HandelToggle(e)}>en</Lan>
            <Languages data-toggle="menu-lang">
              <Option>ar</Option>
              <Option>us</Option>
            </Languages>
          </Banel>
          <Account>
            <AccountImg data-toggle="menu-setting" onClick={(e) =>{ 
            e.preventdefault()
            HandelToggle(e) ;
            }}>O</AccountImg>
            <Setting data-toggle="menu-setting">
              <Option>                
                <Link to="/setting"> <FaCog /> setting </Link>
              </Option>
              <Option> <Link to="/logout"> <FaSignOutAlt/> logout  </Link> </Option>
            </Setting>
          </Account>
          <Fav>
            <Link to="/favorites"><FaRegHeart /></Link>
          </Fav>
        </Info>
        <Search>
          <FaSearch />
          <InputSearch type="search" placeholder="Search book , author" />
        </Search>
        <Logo> Library </Logo>
      </NavBar>
      <Links>
        <List>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/category">category</Link>
          </li>
          <li>
            <Link to="/clubs">clubs</Link>
          </li>
        </List>
      </Links>
    </div>
    </>
  );
}
