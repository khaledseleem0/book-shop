import { Author, Name, ImgContainer,Overlay,Centered, Book,Buy,Price, Bottom } from "./homeStyle";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay} from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
import { Link } from "react-router-dom";
import Loading from "./others/loading";

SwiperCore.use([Autoplay]);

export default function SliderBooks(props) {
  const {books} = props;
  const [loading, setLoading] = useState(true);
  const devices = {
    phone:300,
    tablet:768,
    medium:900,

  };
  const currnt_device = window.outerWidth;
  let  books_numbers = 0;
   currnt_device <= 400 ?  books_numbers = 2 :
   400 < currnt_device && currnt_device <= 780? books_numbers = 3 :
   780 < currnt_device && currnt_device <= 900? books_numbers = 4:
   900 < currnt_device && currnt_device <= 1400?books_numbers = 5:
   books_numbers=5;

  useEffect(() => {
      setLoading(false);
  }, [books]);

 
  return  (loading ?  <Loading/>  : 
  <>
      <Swiper
        slidesPerView={books_numbers}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
        autoplay={{
          "delay":2000,
          "disableOnInteraction": false
        }}
      > 
      {books.map((book) => {
          return (
            <SwiperSlide>
              <Book>
                <ImgContainer>

                <Link to={`/category/${book.title.replaceAll(" ","_")}`}>
                              <img src={book.book_image} alt={book.title} width="100%" />    
                   </Link>
                </ImgContainer>
              <Author> {book.author.toLowerCase()} </Author>
              <Name> {book.title} </Name> 
              </Book>
            
            </SwiperSlide>
          );
        })}
      </Swiper>
      </>
      )
}
