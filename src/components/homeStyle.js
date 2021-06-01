import styled from "styled-components";
import { Link } from "react-router-dom";
export const Slider = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
  border: 1px solid #eee;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  color: #ffd073;
  text-transform: capitalize;
`;

export const Popular = styled.div`
  padding: 10px;
`;
// sider
export const Author = styled.div`
  font-size: 12px;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin-top: 15px;
`;

export const Name = styled.div`
  font-size: 14px;
  line-height: 14px;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  padding: 20px 0 10px 0;
  font-weight: 900;
`;
export const ImgContainer = styled.div`
  display: inline-block;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  img {
    border-radius: 20px;
  }
`;
export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6px;
  border-radius: 20px 10px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 15%);
  position: relative;
`;
export const Buy = styled.div`
  font-size: 15px;
  padding: 5px 20px;
  background: #fceccb;
  border-radius: 10px;
  color: #4a3933;
  overflow: hidden;
  font-weight: 900;
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
`;
export const Price = styled.p``;

export const Centered = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: #d8c292;
  padding: 10px;
  white-space: nowrap;
  border-radius: 7px;
  & > a {
    text-decoration: none;
    color: #4a3933;
  }
`;

export const More = styled(Link)`
  border: 1px solid;
  padding: 10px 40px;
  font-family: "Source Sans Pro";
  font-weight: 900;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
`;

// about section
export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  @media (max-width: 700px) {
    flex-flow: ${(props) =>
      props.second
        ? "column"
        : props.second == false
        ? " column-reverse"
        : "row"};
  }
`;

export const Big = styled.div`
  font-size: 2em;
  font-weight: 900;
`;
export const Img = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 10%;
  }
  img {
    width: 100%;
  }
`;
export const TextContaent = styled.div`
  width: 40%;
  padding: 20px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  background: #ffefcf;
  color: #ffb617;
  margin-top: 20px;
  border: 1px solid;
  font-weight: 900;
  transition: 0.5s;
  border-color: transparent;
  &:hover {
    box-shadow: 0px 0px 5px 5px #ffefcf;
    border-color: #ffb617;
  }
`;

// footer
// Social,Row,LogoFooter
export const Footer = styled.footer`
  padding: 20px 40px;
  background: #ffb617;
  /* height: 40vh; */
  font-weight: 900;
`;
export const Row = styled(About)`
  margin: 0px;
  height: auto;
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
  font-family: "Cairo";
`;
