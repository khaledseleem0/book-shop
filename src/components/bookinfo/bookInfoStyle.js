import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Screens } from "../vars";

export const BookContainerInfo = styled.div`
  background: ${Colors["light-bg"]};
  padding: 40px;
  display: flex;
  justify-items: center;
  align-items: center;
  min-height: 95vh;
  @media (max-width: ${Screens.tablet}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 0;
  img {
    width: 60%;
  }
  @media (max-width: ${Screens.tablet}) {
    width: 100%;
  }
`;

export const BookDataInfo = styled.div`
  padding: 25px;
  width: 50%;
  background: #fff;
  border:1px solid #dedede;
  @media (max-width: ${Screens.tablet}) {
    width: 100vw;
    border-radius: 20px 20px 0 0;
    border:none;
  }
`;

export const BookName = styled.p`
  font-size: 1.5em;
  font-family: "poppins";
  font-weight: 900;
  text-transform: capitalize;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  div {
    position: relative;
    &:hover p,
    &:hover p::after {
      opacity: 1;
    }
  }
`;

export const PopUp = styled.p`
  position: absolute;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: "Poppins";
  top: 0;
  transform: translate(-40%, -120%);
  z-index: 0;
  background: ${Colors.main};
  transition: 0.5s;
  opacity: 0;
  color: ${Colors["sec-color"]};

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    background: ${Colors.main};
    right: 20%;
    display: inline-block;
    position: absolute;
    transform: rotate(45deg);
    z-index: -434533;
  }
`;
export const Author = styled.span`
  font-size: 15px;
  font-family: "poppins";
`;

export const BookDescription = styled.p`
  line-height: 25px;
  font-family: "poppins";
  opacity: 0.8;
  font-size: 15px;
`;

export const Publisher = styled.span`
  opacity: 0.6;
  font-family: "poppins";
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;
export const Tag = styled.span`
  padding: 10px;
  display: inline-block;
  background: ${Colors.main};
  color: ${Colors["sec-color"]};
  border-radius: 8px;
  font-size: 14px;
  margin-right: 10px;
`;

export const Read = styled(Link)`
  display: block;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  border: none;
  width: 80%;
  border: none;
  font-weight: 900;
  text-transform: capitalize;
  letter-spacing: 1px;
  cursor: pointer;
  background: ${Colors.main};
  text-align:center;
  text-decoration:none;
  color: ${Colors["sec-color"]};
opacity:0.6;
transition:0.5s;
:hover{

opacity:1;
}
`;

// menu of groups categories
export const Select = styled.div`
  max-height: 300px;
  overflow-y: scroll;
`;
export const Item = styled.div`
  padding: 10px;
  text-align: center;
  font-family: "poppins";
  position: relative;
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #e3e1e1;
  transition: 0.5s;
  opacity: 0.8;

  &:hover {
    background: #eee;
    opacity: 1;
    box-shadow: 0 0 5 0 #ccc;
  }
`;
export const CheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  opacity: 0;
  width: 100%;
  height: 100%;
`;
// end it
