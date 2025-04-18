
import {Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

function SVGCarousel() {

    // const imgUrl "//seo.axiomthemes.com/wp-content/uploads/2023/03/image-15.png"

    const getImage = (num) => {
        return `//seo.axiomthemes.com/wp-content/uploads/2023/03/image-${14+num}.png`;
      };
  return (
    <div className="md:h-[80dvh] md:w-[85dvw] md:mx-auto">
      <Swiper className="mySwiper"  slidesPerView={1}
        spaceBetween={10}
     
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}>
      {[...Array(4)].map((_, i) => (

        <SwiperSlide className="p-5" key={i}>
          <div className="w-[500px]">

            <img src={getImage(i)} alt="" className="rounded-2xl w-full"/>
          </div>
        </SwiperSlide>

      ))}
      
      <SwiperSlide className="p-5 ">
          <div className="w-[500px]">

            <img src={"//seo.axiomthemes.com/wp-content/uploads/2023/03/image-14.png"} alt="" className="rounded-2xl "/>
          </div>
        </SwiperSlide>
      <SwiperSlide className="p-5 ">
          <div className="w-[500px]">

            <img src={"//seo.axiomthemes.com/wp-content/uploads/2023/03/image-15.png"} alt="" className="rounded-2xl "/>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  )
}
export default SVGCarousel