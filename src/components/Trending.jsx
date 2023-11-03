import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import trending1 from "../assets/latest5.jpg.webp";
import trending2 from "../assets/latest6.jpg.webp";
import trending3 from "../assets/latest7.jpg.webp";
import trending4 from "../assets/latest8.jpg.webp";
import trending5 from "../assets/latest1.jpg.webp";
import trending6 from "../assets/latest4.jpg.webp";
import trending7 from "../assets/latest2.jpg.webp";

export const Trending = () => {
  const data = [
    {
      id: 0,
      img: trending1,
      firstPrice: "120$",
      secondPrice: "98$",
    },
    {
      id: 1,
      img: trending2,
      firstPrice: "150$",
      secondPrice: "100$",
    },
    {
      id: 2,
      img: trending3,
      firstPrice: "200$",
      secondPrice: "180$",
    },
    {
      id: 3,
      img: trending4,
      firstPrice: "80$",
      secondPrice: "60$",
    },
    {
      id: 4,
      img: trending5,
      firstPrice: "120$",
      secondPrice: "98$",
    },
    {
      id: 5,
      img: trending6,
      firstPrice: "120$",
      secondPrice: "98$",
    },
    {
      id: 6,
      img: trending7,
      firstPrice: "160$",
      secondPrice: "145$",
    },
  ];

  return (
    <section className="trending py-5">
      <div className="container">
        <div className="trending_title">
          <h3 className="text-center trending_header my-5">
            Trending This Week
          </h3>
        </div>
        <Swiper
          className="trending_swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          // slidesPerView={3}
          breakpoints={{
            //more than 992
            992: {
              slidesPerView: 3,
            },
            //more than 576
            576: {
              slidesPerView: 2,
            },
            //more than 320
            300: {
              slidesPerView: 1,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => {
            return (
              <SwiperSlide className="">
                <figure className="shadow">
                  <img src={item.img} alt="trending_img" />
                </figure>
                <div className="py-4">
                  <h4 className="trending_title">chashmere Tank +Bag</h4>
                  <div className="d-flex justify-content-between mb-4">
                    <span className="trending_first-price">
                      {item.firstPrice}
                    </span>
                    <span className="trending_second-price">
                      {item.secondPrice}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
