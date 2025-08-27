import React from 'react';
import slid_img_2 from '../assets/banner_img2.jpg'
import slid_img_3 from '../assets/landing_page.jpg'
import slider_img from '../assets/banner-img_3.jpg'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    
    return (
        <>
        <div className='w-full pt-20'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          
          pagination={{clickable: true}}
          autoplay ={{delay: 3000, disableOnInteraction: false}}
          loop={true}
        className= "w-full h-[400px] md:h-[500px] lg:h-[600px]">
       
        <SwiperSlide>
            <img src={slider_img} alt="slide_1" className='w-full h-full object-cover rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slid_img_2} alt="slide_2" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slid_img_3} alt="slide_3" className='w-full h-full object-cover' />
        </SwiperSlide>
         <div className="swiper-button-prev !w-8 !h-8 text-white after:!text-sm"></div>
        <div className="swiper-button-next !w-8 !h-8 text-white after:!text-sm"></div>
        </Swiper>
        </div>
       
        </>
    );
};

export default Slider;