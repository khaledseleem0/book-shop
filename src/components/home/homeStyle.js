import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors ,Black ,Screens} from "../vars";
export const Slider = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
  border: 1px solid #eee;
`
;


// landing page 
export const Landing = styled.div`
    width:100%;
    display:flex;
    padding: 70px 50px;
    align-items: center;
    position:relative;
    @media (max-width: ${Screens.tablet}) {
     flex-flow:column-reverse;
      height:auto;
      padding: 20px 20px;
     justify-content: center;
    };
`;
export const LandingContent = styled.div`
  width: 50%;
  padding-right: 50px;
  p:nth-of-type(2){
    font-family:"Poppins";}
  @media (max-width: ${Screens.tablet}) {
    width: 100%;
    padding-right: 10px;
  }

  p:nth-of-type(2){
    padding: 30px 0px;
    font-family: 'Poppins';
  
  }
`;
export const TooBig = styled.p`
  font-size: 3em;
  font-weight: 900;
  text-transform: capitalize;
  @media (max-width: ${Screens.tablet}) {
    font-size: 2em !important;
  }
`;
export const Btn = styled.button`
font-family:'sora';
  padding: 10px 40px;
  border-radius: 40px;
  background: transparent;
  text-transform: capitalize;
  border: 4px solid;
  transition: 0.5s;
  cursor: pointer;
  color:${Colors["main"]}; 
  
  :hover {
    background: ${Colors.main};
    color:${Colors["sec-color"]} ;
  }
`;
export const Colored = styled.span`
color:${Colors.main};
    font-size: 130%;
`;
export const LandingImg = styled.div`
  width: 50%;
  @media (max-width: ${Screens.tablet}) {
    margin: 60px 0 20px 0;
    width: 80%;
  }
  @media (max-width: ${Screens.phone }) {
    width: 100%;

  }
  img {
    width: 100%;
  }
`;

// end landing
//  2nd section

export const SlideImages = styled.div`
      display: flex;
      flex-flow:column;
      justify-content: center;
      align-items: center;
      padding:5% ;       
      background:#fafafa;

`;
export const Hidden = styled.div`
      overflow:hidden;
      box-shadow: -2px 5px 20px 0px #d9d9d96b;
      border-radius: 20px;

`;
export const SlideHeader = styled.ul`
      display: flex;
      list-style:none;
      justify-content: center;
      padding:20px 50px;
      li{
        a{
          display: inline-block;
          text-decoration:none;
          padding:10px 20px;
          text-transform: capitalize;
          width:30vw;
          display: inline-block;
          white-space: nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
          text-align:center;
        @media (max-width: ${Screens.phone}) {
            padding:10px 5px;
            font-size:14px;
            width:30vw;
       }
        }
      }

      
`;
export const ImageContainer = styled.div`
      display: flex;
      transition:transform 0.4s;
      width:90vw;

     img{
      width: 90vw;
      height: 49vw;
    }
      
`;

// 
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  text-transform: capitalize;
  align-items: center;
`;

// sider  card item
export const BookWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius:  5px;
  box-shadow: 0px 0px 20px #eee;
  position: relative;
  border:1px solid #eee;
`;
export const ImgContainer = styled.div`
  display: block;
  height: 170px;
  overflow: hidden;
  border-radius:  5px;
  position:relative;
  width:100%;
  img {
    border-radius:  5px;
    transition:0.3s;
  }
  & > a {
position:absolute;
width:100%;
height:100%;
background-image: linear-gradient(10deg,#393e46b5,rgb(0 0 0 / 10%));
top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 123;
}
a:hover +  img {
  transform:scale(1.3);
}
`;


// card content 
export const CardContainer = styled.div`
padding: 0px 10px ;
display:block;
width:100%;
`;

export const Author = styled.div`
  font-size: 12px;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  padding: 10px 0;
`;

export const Name = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size:13px;
  font-family: "Poppins";
  text-transform:lowerCase;

`;
export const Rate = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  span{
    font-size:13px;
  }
`;

export const Stars = styled.div`
  display:flex;
  svg{
    font-size:14px;
    fill:#ffce6d
  }
 `


// end card
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background: #eee;

`;
export const Price = styled.p``;


// about section
export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  ul{
    @media (max-width: ${Screens.phone}) {
    width: 100%;
  }
    li{
      font-family: 'Poppins';
    line-height: 29px;
    }
  }
  @media (max-width: ${Screens.phone}) {
    flex-flow:column;
     /* ${(props) =>
      props.second
        ? "column !important" 
        : props.second === false
        ? "column-reverse !important"
        : "column "};*/
  } 
  @media (max-width: ${Screens.tablet}) {
    /* flex-flow: ${(props) =>
       props.columen  ? "column !important": "row !important"
    } */

  }
`;

export const Big = styled.div`
  font-size: 2em;
  font-weight: 900;
  padding: 20px 0px;
  @media (max-width: 700px) {
    font-size: 1.5em;
    text-align:center;

  }
`;
export const Img = styled.div`
  width: 50%;
  text-align:center;
  @media (max-width: ${Screens.tablet}) {
    width: 100%;
    padding: 0 10%;
  }
  img {
    width:'100%'
 
  }
`;
export const Half = styled.img`
width:50% !important;
`;

export const TextContaent = styled.div`
  width: 40%;
  padding: 20px;
  p{
    font-family: 'Poppins';
    opacity:0.7;

  }
  @media (max-width: ${Screens.tablet}) {
    width: 100%;
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  background: ${Colors.main};
  color: ${Colors["sec-color"]};
  margin-top: 20px;
  font-weight: 900;
  border:none;
`;

// blog 
export const CenterText = styled.p`
  text-align:center;
  font-size: 1.5em;
  padding-bottom:20px; 
`;
export const Grid = styled.div`
display:grid;
grid-template-columns: 30% 30% 30%;
padding:50px ;
background:#fafafa;
grid-column-gap: 5%;
@media (max-width: ${Screens.tablet}) {
  grid-template-columns: 50% 50%;

  }

  @media (max-width: ${Screens.phone}) {
    grid-template-columns: 100%;
}
  

`;
export const Item = styled.div`
  padding:20px 10px ;
  transition: 0.5s;
  &:hover{
    box-shadow:0px 0px 20px 4px #efefef;
    transform:translateY(-5px)
  }
  p{
    font-family: "Poppins";
    opacity:0.8;
  }


`;

export const Icon = styled.div`
  width: 60px;
  margin:0px auto;

  img {
    width: 100%;
  }
`;


export const Ancor = styled(Link)`
font-family: "Poppins";
margin:20px 0 0 0;
display: inline-block;
border:1px solid;
padding:5px 20px ;
text-decoration: none;
transition:0.4s;

&:hover{
background:${Black};
color:#fff;

}
`;

/* video */

export const Video = styled.div`
  width: 60vw;
  padding:50px;
  @media (max-width: ${Screens.tablet}) {
    width: 90vw;
  }

  video{
    width: 100%;
    height: 100%;
  }
  
`;


// footer
export const Footer = styled.footer`
  padding: 20px 40px;
  background:${Colors["light-bg"]}; 
  font-weight: 900;
`;
export const Row = styled(Grid)`
padding:0px;
background:transparent;

  ul {
    list-style: none;
    padding: 20px 0;
    li {
      a {
        text-decoration: none;
        padding: 5px 0;
        display: inline-block;
        text-transform: capitalize;
      }
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  svg {
    margin: 0px 10px;
    font-size: 1.5em;
  }
`;

export const LogoFooter = styled.div`
  font-size: 2em;
`;

// end footer and home page style 