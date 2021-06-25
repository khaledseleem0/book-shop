import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../vars";
const Center = styled.div`

display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
padding:50px;
min-height:100vh;
background:${Colors["light-bg"]};
display: flex;
justify-content: space-around;
align-items: center;
@media (max-width:650px){
    display:block;
    padding:20px 10px ;

}

`;
export const TransformedContainer = styled.div`
position:relative;

`
export const Form = styled.form`
min-width: 400px;
position:relative;
background:#fff;
padding: 50px 30px;
overflow:hidden;
    box-shadow: 0 0 20px -9px #ccc;
    border: 1px solid #cccccc4d;
    @media (max-width:650px){
    width: 100%;
    min-width:auto;
    }
`;
export const Img = styled.div`
width: 50%;
margin:0 auto;


@media (max-width:650px){
    display:none;
    img{
        display:none;
    }
    }
img{
    width:100%;
};


`;

export const Input = styled.input`
        padding:10px 20px;
        border:2px solid #eee;
        border-radius:6px;
        outline:0;
        transition:0.4s;
        background:${Colors["light-bg"]};
        &:focus{
            border-color:${Colors.main};
        }
`;
export const Link = styled(NavLink)`
            color:${Colors.main};
            text-decoration: none;
            opacity:0.6;
            transition:0.4s;
            :hover{
                opacity:1;

            }
`;
export const Column = styled.div`
display:flex;
flex-flow:column;
`;
export const Label = styled.label`
padding:10px 0;
opacity:0.8;
padding: 15px 0;
    text-transform: capitalize;
    font-size: 14px;
  font-family: 'Poppins';
`;
export const Submit = styled.button`
            background: ${Colors['sec-color']};
            color: ${Colors.main};
            padding:10px ;
            border: 1px solid ;
            transition:0.5s;
            font-family:sora;
            text-transform:capitalize;
            border-radius: 5px;

cursor:pointer;
            :hover{
                background: ${Colors.main};
                color:${Colors['sec-color']} ;
            }
`;

export const Auths = styled(Submit)`
            background:  ${Colors.main};
            color: ${Colors['sec-color']} ;
            width:40%;
            opacity:0.6;
            display:flex;
            justify-content: center;;
            svg{    
                fill:${Colors['sec-color']} ;
                font-size:17px;
            }
            :hover{
                opacity:1; }
`;
export const Row = styled.div`
display:flex;
margin-top:20px;
justify-content:space-between ;

`;
export const Line = styled.div`
margin-top:20px;
position:relative;
text-align: center;
opacity:0.3;
font-family: 'Poppins';
::after ,::before{
content: "";
display:inline-block;
height:1px;
background:${Colors.color};
width:40%;
margin: 4px  0;
}
`;
export const Title = styled(Center)`
    font-size: 20px;
    svg{
        margin-left:10px
    }
`;


// for signup only 
export const Progress = styled.div`
position:absolute;
height:3px;
left:-1%;
top:0;
transition:.4s;
width:${props=>props.progress ? props.progress : ""}%;
background:${Colors.main};
z-index: 23423;
`;
export const Back = styled.div`
position:absolute;
top:0;
bottom:0;
width:100%;
height:100%;
background:#fff;
transition: clip-path 0.7s , opacity 2s;
clip-path: circle(0% at 100% 0%);;
/* opacity:1; */
transition-delay: 2s;

`;