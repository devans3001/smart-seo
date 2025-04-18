import { SiComma } from "react-icons/si";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useView } from "../hook/useView";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
  const { isView } = useView();

  return (
    <div className="relative md:w-[85dvw] md:mx-auto  md:h-screen">
      {/* Custom navigation buttons */}
      {isView && (
        <>
          <button className="custom-prev border-1 border-black absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black rounded-full">
            <HiChevronLeft className="w-10 h-10" />
          </button>

          <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black border-1 border-black rounded-full">
            <HiChevronRight className="w-10 h-10" />
          </button>
        </>
      )}

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={isView ? { nextEl: ".custom-next", prevEl: ".custom-prev" } : false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            title={"John Doe"}
            url={"https://seo.axiomthemes.com/wp-content/uploads/2021/09/image-1-120x120.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            title={"Tatiyana Ali"}
            url={"https://seo.axiomthemes.com/wp-content/uploads/2021/08/image-2-120x120.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            title={"Chris Evans"}
            url={"https://seo.axiomthemes.com/wp-content/uploads/2021/08/image-13-120x120.jpg"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;

function Box({ url, title }) {
  return (
    <div className="pb-7 max-w-md mx-auto p-6 bg-card rounded-lg flex flex-col gap-3 my-3 md:g-5">
      <div className="max-w-[100px] mx-auto">
        <img className="w-24 h-24 rounded-full mx-auto" src={url} alt={`Profile of ${title}`} />
      </div>
      <blockquote className="text-center">
        <p className="text-lg md:tex">
          Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsum voluptatem quia voluptas.
        </p>
      </blockquote>
      <p className="flex rotate-180 justify-center items-center text-2xl text-primary">
        <SiComma />
        <SiComma />
      </p>
      <footer className="text-center">
        <cite className="text-primary font-semibold">{title}</cite>
        <p>CEO, Business Co.</p>
      </footer>
    </div>
  );
}
