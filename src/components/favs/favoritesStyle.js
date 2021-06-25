import styled from "styled-components";
import { Screens, Colors } from "./../vars";


// =========== start  of framework ========

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
export const Message = styled.p`
padding:20px;
font-size: 1.2em;
text-align: center;
    margin: 30px;
    opacity: 0.4;
` 
export const Container = styled.div`
background:${Colors["light-bg"]};
min-height: 100vh;
padding:20px 30px;
`;


// =========== end  of framework ========

//  ========= start style  header =========


export const Header = styled.header`
      height:200px;
      background:${props => props.background ? `url(${props.background})`  :"#fff" } ;
      border-bottom:1px solid #ccc;
      position: relative;
      background-size:cover;
      margin-bottom:100px;
      z-index:-1;
      background-position:${(props)=>props.position === 'right' ? 'right' : props.position === 'left' ? 'left' : props.position === 'bottom' ? 'bottom': props.position === 'top' ? 'top' :'center'};
      &:after{
        content:"";
        position:absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(#4234341f,#33333394);
        z-index:12;

      }
      
`;

export const TextHeader = styled.p`
    background: #fff;
    padding: 20px 49px;
    box-shadow: 0px 0px 18px 7px #eeeeee47;
    position: absolute;
    top: 89%;
    left: 10%;
    font-size: 2em;
    z-index: 123;
    border:1px solid #cccccc47;
    border-radius: 6px;
    max-width:calc(100% - 100px);
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @media (max-width:${Screens.phone}){
      font-size:18px;
     
    }
`;
//  ========= end style  header =========

//  ========= start style  Card =========

export const Card = styled.div`
  background:#fff;
  display: flex;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow:2px 6px 20px 1px #cccccc45;
  height:120px;
 `
export const Title = styled.div`
    font-size: 1em;
    
`;
export const Cardinfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: right;
  padding-left:10px;
  width:70%;

`;
export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 30%;
    overflow:hidden;
    border-radius: 10px;

  img {  
      width: 100%;
    display:block;
    border-radius: 10px;

}
  
`;


export const Bottom = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Name = styled.p`
font-size :13px;
font-family:"poppins";
`;



/*

note : - [this file had 2 styles file]


*/


/* 
Fav category file 

 */


export const FavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  a {
    text-decoration: none;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
  }
  @media (max-width: ${Screens.tablet}) {
    grid-template-columns: repeat(2, calc(100% / 2));
  }
  @media (max-width: ${Screens.phone}) {
    grid-template-columns: 100%;
    /* do not  change it */
  }
`;



export const FavCategoryCard = styled.div`
  height: 220px;
  background-image: linear-gradient(rgb(56 56 56 / 12%), rgb(0 0 0 / 62%)),
    ${(props) => (props.background ? `url(${props.background})` : "gray")};
  background-size: cover;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0px 0px 0px 40px;
  text-transform: capitalize;
  border-radius: 5px;
  margin: 5%;
  position: relative;
`;
export const FavCategoryName = styled.p`
  color: #fff;
  font-family: "poppins";
`;
export const FavCategoryNumber = styled.p`
  color: #fff;
  span {
    color: #fff;
    font-family: "poppins";
  }
`;
/* ========  favs group maker =========== */

export const AddNewFavCategory = styled(FavCategoryCard)`
  border: 3px dashed;
  align-items: center;
  padding: 0px;
  opacity: 0.5;

  svg {
    font-size: 2em;
    cursor: pointer;
  }
`;


/* ========== prompt window ============ */

export const AbsoluteContainer = styled.div`
  position: fixed;
 height: 100vh;
  width: 0;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  display: flex;
  opacity: 0;
  transition: opacity 0.5s;
  overflow-x: hidden;
  z-index:234324;
  display:flex;
  justify-content: center;
`;
export const CategoryContent = styled.div`
  background: #fff;
  font-family: "poppins";
  border-radius: 6px;
  width: 500px;
  padding: 20px 40px;
  height: fit-content;
  animation: null 1s 1 ease-in-out;
  margin-top: 20px;
  @media (max-width: ${Screens.tablet}) {
    width: 70%;
  }
  @media (max-width: ${Screens.phone}) {
    width: 90%;
    padding: 0px 20px;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  div {
    display: flex;
    flex-flow: column;
    width: 100%;
    label {
      padding: 10px 0px;
      opacity: 0.7;
      text-transform: capitalize;
      font-size: 14px;
    }
  }
`;
export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline:0;
  transition:0.5s;
  &:focus{
      border-color:${Colors.main};
  }
`;

export const File = styled.div`
  border: 1px dashed ${(props) => (props.dragged ? "green" : "")};
  padding: 40px;
  position: relative;
  border-radius: 4px;
  color: ${(props) => (props.dragged ? "green" : "")};
  p {
    color: inherit;
    text-align: center;
  }
`;
export const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  width:100%;
  height:100%;
`;
export const TowBtns = styled.div`
display: flex;
  flex-flow: row !important;
  padding: 20px 0;
  justify-content: ${(props) => (props.close ? "center" : "space-between")};

`;
export const Button = styled.button`
  padding: 10px 20px;
  width: 45%;
  background: ${(props) => (props.discard ? "#fff" : Colors.main)};
  color: ${(props) => (props.discard ? "red" : Colors["sec-color"])};
  border: 1px solid;
  border-color: ${(props) => (props.discard ? "red" : Colors.main)};
  opacity: ${(props) => (props.valid ? 1 : 0.4)};
  cursor: ${(props) => (props.valid ? "pointer" : "not-allowed")};
  border-radius: 5px;

`;
