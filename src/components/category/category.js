import React, { useState, useEffect } from "react";
import { Big } from "../home/homeStyle";
import Loading from "../others/loading";
import SliderBooks from "../sliderbooks";
import { Get_Api } from "../vars";
import {
  CategoryContainer,
  Header,
  CatName,
  Categories,
  Item,
  More,
  Popular
} from "./categoryStyle";
import {
  FaSquareRootAlt,
  FaAtom,
  FaFilter,
  FaHeartbeat,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";
export default function Category() {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Get_Api().then((response) => {
      setBooks(response.results.books);
      setLoading(false);
    });
  }, []);
  let cats = [
    { icon: <FaAtom />, catName: "physics", color: "#d8b384" },
    { icon: <FaFilter />, catName: "chemistry", color: "#ff520091" },
    { icon: <FaHeartbeat />, catName: "biology", color: "#deedf0" },
    { icon: <FaChartBar />, catName: "geometry", color: "#ffd073" },
    { icon: <FaRobot />, catName: "robotic", color: "#9fe6a0" },
    { icon: <FaSquareRootAlt />, catName: "algebra", color: "#ff9393" },
  ];
  return loading ? (
    <Loading />
  ) : (
    <>
    <Categories>
          {cats.map((cat, i) => {
            return (
              <Item key={i} color={cat.color}>
                {cat.icon}
                <CatName>{cat.catName}</CatName>
              </Item>
            );
          })}
        </Categories>
      
                <CategoryContainer>
          <Header>
            <Big> explore </Big>
            <More to="/explore"> more </More>
          </Header>
          <Popular>
            <SliderBooks books={books}  />
          </Popular>

          <Header>
            <Big> excuseves </Big>
            <More to="/excuseves"> more </More>
          </Header>
          <Popular>
            <SliderBooks books={books} />
          </Popular>

          <Header>
            <Big> web development </Big>
            <More to="/web"> more </More>
          </Header>
          <Popular>
            <SliderBooks books={books}  />
          </Popular>
      </CategoryContainer>
   </>
  );
}
