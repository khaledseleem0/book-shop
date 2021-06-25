import SwiperCore, { Autoplay,Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Autoplay,Navigation, Scrollbar, A11y]);

export default function Caursole () {
    return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{  hide:true  }}
        loop={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
      >
      <SwiperSlide> 
        <img src={process.env.PUBLIC_URL+'/assesst/images/slide1.png'} width='100%' alt="slide1"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={process.env.PUBLIC_URL+'/assesst/images/slide2.png'} width='100%' alt="slide2"/>
      </SwiperSlide>
      <SwiperSlide> 
        <img src={process.env.PUBLIC_URL+'/assesst/images/slide3.png'} width='100%' alt="slide3"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={process.env.PUBLIC_URL+'/assesst/images/slide4.png'} width='100%' alt="slide4"/>
      </SwiperSlide>

    </Swiper>
  );
};