import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Blogs() {
  const arr = [
    {
      title: "Why do project managers need to focus on strategy",
      url: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-9-890x664.jpg",
    },
    {
      title: "Top 5 targeting techniques to attract customers",
      url: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-10-890x664.jpg",
    },
    {
      title: "Fresh startup ideas for your digital business",
      url: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-11-890x664.jpg",
    },
    {
      title: "Why are you getting tired of work",
      url: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-12-890x664.jpg",
    },
  ];

  return (
    <div className="p-5 md:w-[85dvw] md:mx-auto">
      <h3 className="text-lg uppercase font-semibold text-center md:text-sm">
        our blogs
      </h3>
      <h1 className="text-2xl font-bold mb-2 text-center md:text-5xl md:mt-3 md:mb-6">
        Latest articles
      </h1>

      {/* THEM THEM  */}
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {arr.map((ele) => (
            <SwiperSlide key={ele.url}>
              <Blog ele={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
export default Blogs;

function Blog({ ele: { url, title } }) {
  return (
    <div className="pb-7">
      <div className="img overflow-hidden rounded-2xl group">
        <img
          src={url}
          alt="Descriptive text"
          className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="text py-2 flex flex-col gap-2">
        <h3 className="font-semibold">Media SEO</h3>
        <h2 className="font-bold text-2xl"> {title}</h2>
        <p className="text-sm text-gray-500">Apr 21, 2020 0 Comment</p>
      </div>
    </div>
  );
}
