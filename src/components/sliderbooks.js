import { Author, Name, ImgContainer, BookWapper,CardContainer, Rate,Stars } from "./home/homeStyle";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay} from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import "./styles.css";
import { Link } from "react-router-dom";
import Loading from "./others/loading";
import { FaStar } from "react-icons/fa";

SwiperCore.use([Autoplay]);

export default function SliderBooks(props) {
  const {books} = props;
  const [loading, setLoading] = useState(true);
  
  const currnt_device =  window.innerWidth;
  let  books_numbers = 0;
   currnt_device <= 300 ?  books_numbers = 1 :
   300 < currnt_device && currnt_device <= 500? books_numbers = 2:
   500 < currnt_device && currnt_device <= 700? books_numbers = 3:
   700 < currnt_device && currnt_device <= 900? books_numbers = 4:
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
            <SwiperSlide key={Math.random()}>
              <BookWapper>
                <ImgContainer link={`/category/${book.title.replaceAll(" ","_")}`}>

                <Link to={`/category/${book.title.replaceAll(" ","_")}`}> </Link>
                 <img src={book.book_image} alt={book.title} width="100%" />    
               
                </ImgContainer>
                <CardContainer>
              <Author> {book.author.toLowerCase()} </Author>
              <Name> {book.title} </Name> 
<Rate>
<Stars>
           <FaStar />
           <FaStar />   
           <FaStar /> 
           <FaStar />

 </Stars>
<span> (+4.5)</span>
</Rate>
              </CardContainer>   
              </BookWapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </>
      )
}
