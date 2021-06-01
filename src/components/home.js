import Caursole from "./swiper";
import React, { useState, useEffect } from "react";
import {
  Social,
  Row,
  LogoFooter,
  Slider,
  Header,
  Popular,
  About,
  Button,
  More,
  Big,
  Img,
  TextContaent,
  Footer,
} from "./homeStyle";
import SliderBooks from "./sliderbooks";
import { Get_Api } from "./vars";
import Loading from "./others/loading";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
export default function Home() {
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
        <Slider>
          <Caursole />
        </Slider>
        <Header>
          <h1> popular now </h1>
          <More>view all</More>
        </Header>
        <Popular>
          <SliderBooks books={books} />
        </Popular>
        <About second={false}>
          <TextContaent>
            <Big> Lorem, ipsum dolor. </Big>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a
              molestiae voluptas veritatis voluptates sequi eos dolores
              cupiditate ipsa accusantium odit, iste distinctio culpa officiis
              totam libero repellat. Ea, praesentium.
            </p>
            <Button> Learn more </Button>
          </TextContaent>
          <Img>
            <img
              src={process.env.PUBLIC_URL + "/assesst/images/onlinereading.svg"}
            />
          </Img>
        </About>

        <About second={true}>
          <Img>
            <img
              src={process.env.PUBLIC_URL + "/assesst/images/Bookshelves.svg"}
            />
          </Img>
          <TextContaent>
            <Big> Lorem, ipsum dolor. </Big>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a
              molestiae voluptas veritatis voluptates sequi eos dolores
              cupiditate ipsa accusantium odit, iste distinctio culpa officiis
              totam libero repellat. Ea, praesentium.
            </p>
            <Button> Learn more </Button>
          </TextContaent>
        </About>
      </div>
      <Footer second={"footer"}>
        <LogoFooter>
          {" "}
          <FaBook /> library{" "}
        </LogoFooter>
        <Row>
          <ul>
            <li>
              <Link to="/Categories"> Categories</Link>
            </li>
            <li>
              <Link to="/Locations"> Locations</Link>
            </li>
            <li>
              <Link to="/Terms"> Terms </Link>
            </li>
            <li>
              <Link to="/Privacy-Policy"> Privacy Policy</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/books"> books</Link>
            </li>
            <li>
              <Link to="/clubs"> clubs</Link>
            </li>
            <li>
              <Link to="/home"> home </Link>
            </li>
            <li>
              <Link to="/api">api</Link>
            </li>
          </ul>
        </Row>
        <Social>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaGoogle />
        </Social>
      </Footer>
    </>
  );
}
