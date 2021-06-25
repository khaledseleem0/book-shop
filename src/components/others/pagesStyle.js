import styled,{keyframes} from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);

  }

  to {
    transform: rotate(360deg);

  }
`;



export const Container = styled.div`
    width:100vw;
    min-height:100vh;
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

 color: #DA0037;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);
  border-radius: 50%;
  

  &::before,
   &::after {
  position: absolute;
  content: '';
}


&::before {
  width: 5.2em;
  height: 10.2em;
  background: #fff;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: ${rotate} 2s infinite ease 1.5s;
  animation: ${rotate} 2s infinite ease 1.5s;
}
&::after {
  width: 5.2em;
  height: 10.2em;
  background: #fff;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  transform-origin: 0.1em 5.1em;
  animation: ${rotate} 2s infinite ease;
}


`;   
export const  LoadContainer = styled.div`
        width: 100%;
        display:flex;
        justify-content: center;
        align-items:center;
        padding-top:20px;



`;   







