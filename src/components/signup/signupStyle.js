import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Colors } from '../vars';
export const Content = styled.div`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`;
export const Uploader = styled.div`
position:relative;
position: relative;
    width: 100%;
    text-align:center;
    padding:20px;
    margin-top: 30px;

    border:1px solid #c70039;
    color:#c70039;
    text-transform:capitalize;
transition:.6s;
    ${props=>props.img  === ""? "":`opacity:.7;color:green;
    border-color:green;
    opacity:1;
   `};
`;
export const ImgContainer = styled.div`
    width:100px;
    height:100px;
    margin:0px auto;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
    }
    ${props=>props.img  === ""? "":`border:2px solid green;
    border-radius:100%;
   `};
   
`;
export const Finish = styled(Link)`
padding:10px 20px;
    background: #DA0037;
    color: #FFf;
    box-shadow: 1px 1px 20px 20px #f9f9f9;
    margin-top: 40px;
    display: block;
    width: fit-content;
    margin: 50px auto;
    border-radius: 35px;
    cursor: pointer;
    text-decoration:none;
`;
