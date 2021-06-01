import styled from "styled-components";
import { Small } from "../vars";

export const BookContainerInfo = styled.div`
background: #ffefcf;
padding: 40px ;
display: flex;
justify-items: center;
align-items: center;
@media (max-width:${Small}px){
    flex-direction: column;
    padding: 40px  40px  0  40px ;

}
`;
export const BookDataInfo  = styled.div`
padding: 0 25px;
width: 50%;
background: #fafafa;
@media (max-width:${Small}px){
    width: 100vw;
    border-radius: 20px 20px 0 0;
    padding: 0 25px;

}
`;
export const ImgContainer = styled.div`
width: 50%;
background: #ffefcf;
display:flex;
justify-content: center;
align-items: center;
padding: 45px  0 ;
img{
    width: 60%;
}
@media (max-width:${Small}px){
    width: 100%;

}
`;
export const BookName  = styled.p`
font-size: 2em;
font-family: 'Cairo' , 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
export const BookDescription  = styled.p`
line-height: 30px;
    color: #5e4949;
`;
export const Rate  = styled.div`

`;
export const Price  = styled.p`
        margin-bottom:10px;
        text-decoration: ${(props)=>props.price == 0 ? "line-through" :""};
        color: ${(props)=>props.price == 0 ? "#fe005f" :""};
        &::after{
                content: "free";
                padding-left:10px;
                text-transform: capitalize;
        }

`;
export const Author  = styled.span`
font-size: 15px;
font-family: tahoma;

`;
export const Publisher  = styled.span`
    color:#ccc;
`;
export const Heading  = styled.div`
    background:#fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 25px 0;
`;
export const Tags  = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;

`;
export const Tag  = styled.span`
    padding: 10px;
    display: inline-block;
    background: #fff;
    border-radius: 8px;
    font-size:14px;
    margin-right: 10px;
`;

export const Add = styled.button`
    display: block;
    margin: 25px auto;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background: rgb(255 208 115);
    width: 80%;
    border: none;
    color: #bd8515;
    font-weight: 900;
    text-transform: capitalize;
    letter-spacing: 1px;
`;