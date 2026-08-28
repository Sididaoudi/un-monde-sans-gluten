//le composant parent (Testimonials) gère la liste et la mécanique du carrousel

import testimonials from "../Data/Testimonials";
import ReviewsCard from "./ReviewsCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

let reviews = [...testimonials];

// je les affiche par ordre alphabétique
let reviewsByAlphabeticOrber = reviews.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
);


function Testimonials() {
  return (
    <section className="w-full overflow-hidden relative ">
      <img
        src="/src/assets/testimonial/testimonial-bg.jpg"
        alt="Image de fond"
        className="absolute h-full w-full object-cover"
      />
      {/* Div container */}
      <div className="w-full pt-[100px] pb-[100px] z-10 relative flex flex-col flex-wrap items-center justify-center">
        <div className="mb-15 relative z-10 ">
          <h2 className="text-white mb-2 text-4xl font-bold">
            Les avis de notre communauté
          </h2>
          <p className="text-white">
            Leurs retours en toute transparence sur nos meilleures adresses
          </p>
        </div>
        {/* class="testimonial__slider owl-carousel owl-loaded owl-drag" */}
        <div className="w-full min-w-0">
          {" "}
          {/* Ici il ne fallait pas mettre block */}
          {/**class="owl-stage-outer" transform-3d(0,0,0)" */}
          <div className="relative overflow-hidden w-full ">
            {/*owl-stage style="transform: translate3d(-1860px, 0px, 0px); transition: all; width: 6510px;" */}
            <div className="w-full min-w-0">
              {/*Testimonials */}
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectFade]}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1200}
                grabCursor={true}
                pagination={{ clickable: true }}
              >
                {reviewsByAlphabeticOrber.map((review) => (
                  <SwiperSlide key={review.id}>
                    <ReviewsCard
                      review={review.review}
                      img={review.img}
                      firstName={review.firstName}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
