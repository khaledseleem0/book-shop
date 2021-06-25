import React, { useState } from "react";
import {
  Social,
  Row,
  LogoFooter,
  CenterText,
  About,
  Button,
  Big,
  Img,
  TextContaent,
  Footer,
  Landing,
  LandingContent,
  TooBig,
  Btn,
  LandingImg,
  ImageContainer,
  SlideHeader,
  SlideImages,
  Hidden,
  Half,
  Icon,
  Item,
  Grid,
  Ancor,
  Video,
  Colored
} from "./homeStyle";
import { Link, NavLink } from "react-router-dom";
import {
  FaBook,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import firebase from './../../firebase';
export default function Home() {
  const hnadelSlide = (e) => {
    const images = document.querySelectorAll(".images img");
    const transformed = document.querySelector(".images");
    const link_target = e.target.getAttribute("data-target");
    images.forEach((x, i) => {
      if (x.getAttribute("data-target") === link_target) {
        if (i !== 0) {
          transformed.style.setProperty(
            `transform`,
            `translateX(${(i * 10) - (i* 100 )}vw)`
          );
        } else {
          transformed.style.setProperty(`transform`, `translateX(0px)`);
        }
      }
    });
  };
   return (
    <>
      <Landing>
        <LandingContent>
          <TooBig>find books and <Colored> Read it </Colored>when  you wont</TooBig>
          <p>
            Lorem ipsum dolor sit  Laudantium
            in magni, voluptates aperiam sequi deleniti autem
          </p>
          <Btn>get started</Btn>
        </LandingContent>
        <LandingImg>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assesst/images/desktop/landing-page.svg"
            }
          />
        </LandingImg>
      </Landing>

      <SlideImages>
        <Big> Newest features and Innovations </Big>
        <SlideHeader className="links">
          <li>
            {" "}
            <NavLink
              to="/audio"
              data-target="audio-books"
              onClick={(e) => {
                e.preventDefault();
                hnadelSlide(e);
              }}
            >
              audio books{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink
              to="/more-cat"
              data-target="more-cats"
              onClick={(e) => {
                e.preventDefault();
                hnadelSlide(e);
              }}
            >
              more categories{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink
              to="/reading"
              data-target="reading"
              onClick={(e) => {
                e.preventDefault();
                hnadelSlide(e);
              }}
            >
              reading{" "}
            </NavLink>{" "}
          </li>
        </SlideHeader>
        <Hidden>
          <ImageContainer className="images">
            <img
              src={process.env.PUBLIC_URL + "/assesst/images/audio-books.png"}
              data-target="audio-books"
            />
            <img
              src={process.env.PUBLIC_URL + "/assesst/images/more-cats.png"}
              data-target="more-cats"
            />
            <img
              src={process.env.PUBLIC_URL + "/assesst/images/read.png"}
              data-target="reading"
            />
          </ImageContainer>
        </Hidden>
      </SlideImages>
        <About second={false}>
          <Img>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assesst/images/location-animation.svg"
              }
              alt={"online reading"}
            />
          </Img>
          <TextContaent>
            <Big> You can find us online or in google map </Big>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a
              molestiae voluptas veritatis voluptates sequi eos dolores
            </p>
            <Button> Learn more </Button>
          </TextContaent>
        </About>

        <About second={true}>
          <Img>
            <Half
              src={process.env.PUBLIC_URL + "/assesst/images/book.svg"}
              alt={"online reading"}
              half={true}
            />
          </Img>
          <TextContaent>
            <Big> Try to read from a lot of resourses </Big>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a
              molestiae voluptas veritatis voluptates sequi eos dolores
            </p>
            <Button> Learn more </Button>
          </TextContaent>
        </About>
      
                <CenterText> Blogs </CenterText>
      <Grid>
        <Item>
          <Icon>
            <img
              src={
                process.env.PUBLIC_URL + "/assesst/images/icon/book-icon.svg"
              }
            />
          </Icon>
          <Big>Go shopping with online books</Big>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a
            molestiae voluptas
          </p>
          <Ancor to="#"> Read more </Ancor>
        </Item>
        {/* item 2  */}
        <Item>
          <Icon>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assesst/images/icon/digital-library-icon.svg"
              }
            />
          </Icon>
          <Big>Read from evey where evere time</Big>

          <p>
            Lorem ipsum dolor sit, amet consectetur. Vero a molestiae voluptas
          </p>
          <Ancor to="#"> Read more </Ancor>
        </Item>
        {/* item 3  */}
        <Item>
          <Icon>
            <img
              src={
                process.env.PUBLIC_URL + "/assesst/images/icon/library-icon.svg"
              }
            />
          </Icon>
          <Big>Find what you need between a lot of e-resourses </Big>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a
          </p>
          <Ancor to="#"> Read more </Ancor>
        </Item>
        {/* end items  */}
      </Grid>

      {/* video */}

      {/* end video */}
      <About columen={{ tablet: true }} className="container">
        <Video>
          <video autoPlay muted loop>
            <source
              src={process.env.PUBLIC_URL + "/assesst/video/video.mp4"}
            ></source>
          </video>
        </Video>
        <TextContaent>
          <Big> See more and more with our new videos </Big>

            <ul>
              <li>
                {" "}
                cumque illum!  alias commodi magni.{" "}
              </li>
              <li> voluptas  ipsa saepe maxime labore distinctio?</li>
              <li> Consectetur nisi ea  nesciunt in dolore! </li>
              <li>  adipisicing elit. Quae, iure. </li>
            </ul>
     
          <Button> See more videos </Button>
        </TextContaent>
      </About>

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
          <ul>
            <li>
              <Link to="/blog"> blog </Link>
            </li>
            <li>
              <Link to="/company"> company</Link>
            </li>
            <li>
              <Link to="/eductaion"> eductaion </Link>
            </li>
            <li>
              <Link to="/help">help</Link>
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
