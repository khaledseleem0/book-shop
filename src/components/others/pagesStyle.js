import styled,{keyframes} from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
    border-bottom-width: 0;
  }

  to {
    transform: rotate(360deg);
    border-bottom-width: 1;

  }
`;

export const Container = styled.div`
    width:100vw;
    height:100vh;
    padding:5%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction: column;
    img{
        width:50%;
    }
`;   
export const Txt = styled.p`
font-weight: 900;
    text-align: center;
    font-size: 2em;
    color: rgb(0 0 0 / 32%);
`;   
export const LoadCeyrle = styled.div`
    width: 50px ;
    height: 50px;
    border: 4px solid ;
    border-top-width:0;
    background:transparent;
    animation: ${rotate} 1s infinite ease-in-out;
    color: rgb(255 208 115);
    border-radius: 50%;

`;   
export const LoadContainer = styled.div`
        width: 100vw;
        display:flex;
        justify-content: center;
        align-items:center;
        height: 100px ;

`;   
