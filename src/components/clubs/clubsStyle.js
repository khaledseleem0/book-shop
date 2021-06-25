import styled from 'styled-components';
import {  CategoryContent } from '../favs/favoritesStyle';
import { Screens ,Colors} from '../vars';
export const Bg = styled.div`
width:100%;
background:${Colors['light-bg']};
min-height:100vw;
`;
export const ClubContainer = styled.header`
padding:20px 0;
 @media (max-width:600px){
    padding: 20px ;
} 
max-width:600px;
margin:0 auto;
`;


export const Post = styled.div`
padding:10px ;
background:#fff;
margin:15px 0px;
box-shadow: rgb(0 0 0 / 10%) 0px 1px 8px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
border-radius: 3px;
position: relative;
transition:0.5s;
border-radius:8px;

@media (max-width:${Screens.phone}){
    padding:10px  20px;
}
`;

export const Btn = styled.button`
padding:10px 20px;
border-radius:10px;
border:2px solid ;
font-weight:900;
background:#fff;
transition:0.4s;
color:${Colors.main};
cursor:pointer;
&:hover{
    background:${Colors.main};
    color:${Colors['sec-color']}
}
`;
export const Header = styled.header`
display:flex;
justify-content: space-between;
border:1px solid #ebe9e9;
align-items:center;
margin-bottom: 40px;
padding:10px;
background:#fff;

`;

export const HeaderPost = styled.header`
display:flex;
justify-content: space-between;
border-bottom:1px solid #ebe9e9;
padding-bottom:10px;
align-items:center;
`;


export const HeaderContent = styled.header`
display:flex;
align-items: center;

`;
export const ProfileImg = styled.div`
width:50px;
height:50px;
border-radius:100%;
overflow: hidden;
background: ${props=> props.background ? `url(${props.background})`: "ss"};
background-size:cover;
background-position:center;
background-repeat: no-repeat;
margin-right:10px;
`;
export const ProfileName= styled.p`


`;
// ProfileImg/
export const PostContent = styled.header`
font-family: 'Poppins';

p:nth-of-type(2){
    font-size: 14px;
    opacity:0.7;
    
}
`;
export const Img = styled.div`
     width: 100%;
    margin-top: 20px;
    img{
        border-radius: 7px;
        width:100%}
`;
export const Footer = styled.footer`
display:flex;
/* justify-content: space-around; */
padding: 15px 0 5px 0;
border-top:1px solid #ebe9e9;
margin-top:20px ;

`;
export const Title = styled.p`
padding:10px  0;
font-weight:900;
font-family:'Sora';
font-size: 25px;
`;

export const Icon = styled.div`
   display:flex;
align-items:center;
span{
    font-size:14px;
    opacity:0.6;
    font-family: 'Poppins';
    margin-left: 5px;
    @media (max-width:${Screens.phone}){
  display:none
}
}
img{
    width: 27px;
}
svg{
    font-size: 24px;
}
`;
export const Icons = styled.div`
width:100%;
display:flex;
justify-content: space-around;
align-items:center;

`;

export const Text = styled.textarea`
    height: 198px;
    background: ${Colors['light-bg']};
    border: 1px solid ${Colors['light-bg']};
    margin: 15px 0px;
    border-radius: 5px;
    resize: vertical;
    max-height: 700px;
    overflow: auto;
    outline:0;
    :focus{
        border-color: ${Colors.main};
    }
`;
export const Content = styled.div`
width:100%;
`;
export const   Container = styled(CategoryContent)`

`;

export const Column = styled.div`
display: flex;
flex-flow: column;
`;
export const Ul = styled.ul`
list-style: none;
li{
    display: flex;
    padding: 10px 0px;
    align-items:center;
    position:relative;
    input{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        width:100%;
        height:100%;
        opacity:0;
    }
    span{
            width:20px;  
            margin-right: 10px;
     img{
        width:100%;
        }
}

}
`;


export const TitleInput = styled.input`
padding:10px 20px;
border:1px solid ${Colors['light-bg']};
background: ${Colors['light-bg']};
outline:0;
border-radius: 5px;
margin: 15px 0px;
:focus{
        border-color: ${Colors.main};
    }
`
export const Row = styled.div`
display:flex;
flex-flow:row;
ul{
    width:50%;

}
justify-content:space-between;
align-items: center;
`
export const ImgPreview = styled.div`
width:50px;
height: 50px;
border:1px dashed;
opacity:0.7;
justify-content:center;
align-items: center;
display:flex;
border-radius:5px;
overflow:hidden;
img{
    width:${props => props.added ? '100%':'50%'} ;
}
`

