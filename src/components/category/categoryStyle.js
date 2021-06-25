import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors } from "./../vars";

export const CategoryContainer = styled.div`
  padding: 10px 20px;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0px;
  background: #fafafa;
  border-bottom: 2px solid #eeee;
`;
export const CatName = styled.p`
  font-family: "Popines";
  padding-top: 10px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-family: "Poppins";
  font-size: 13px;
`;
export const Item = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  display: flex;
  flex-flow: column;
  background: ${(props) => (props.color ? props.color : "#ccc")};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  transition: 0.4s;
  :hover {
    box-shadow: 0px 0px 19px 0px
      ${(props) => (props.color ? props.color : "#ccc")};
  }
  svg {
    font-size: 1.7em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  align-items: center;
`;
//popular slider
export const Popular = styled.div`
  padding: 10px 0px;
`;
export const More = styled(Link)`
  border: 1px solid ${Colors.main};
  padding: 10px 40px;
  font-family: "Poppins";
  font-weight: 900;
  border-radius: 4px;
  text-decoration: none;
  color: ${Colors.main};
  transition: 0.4s;
  &:hover {
    background: ${Colors.main};
    color: #fff;
  }
`;

// https://dribbble.com/shots/14343901-Book-Store
// https://dribbble.com/shots/8549176-Online-Book-Store-App
