import React, { useState, useEffect } from "react";
import { More, Popular } from "../homeStyle";
import Loading from "../others/loading";
import SliderBooks from "../sliderbooks";
import { Get_Api } from "../vars";
import { CategoryContainer, Title, Header } from "./categoryStyle";
export default function Category() {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Get_Api().then((response) => {
      setBooks(response.results.books);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="container">
        <CategoryContainer>
          <Header>
            <Title> explore </Title>
            <More to="/more"> more </More>
          </Header>
          <Popular>
            <SliderBooks books={books} />
          </Popular>

          <Header>
            <Title> excuseves </Title>
            <More to="/more"> more </More>
          </Header>
          <Popular>
            <SliderBooks books={books} />
          </Popular>

          <Header>
            <Title> web development </Title>
            <More to="/more"> more </More>
          </Header>
          <Popular>
            <SliderBooks books={books} paid={true} />
          </Popular>
        </CategoryContainer>
      </div>
    </>
  );
}
