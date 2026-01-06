"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    title: "Top 10 Smartphones in Ghana for 2024",
    excerpt:
      "Discover the best smartphones available in Ghana with amazing features and competitive prices.",
    image:
      "https://i.pinimg.com/1200x/6a/98/85/6a988505355d51acba44cb989c557f89.jpg",
    category: "Smartphones",
    date: "Dec 28, 2024",
    link: "/blog/top-smartphones-2024",
  },
];

export default function Hero() {
  return (
    <section className="hero w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-[500px] md:h-[600px]"
      >
        {/* map hero slides */}
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    {/* Category Badge */}
                    <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                      {slide.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-gray-200 text-lg mb-6">
                      {slide.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-gray-300 text-sm">
                        {slide.date}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={slide.link}
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                    >
                      See Best Deals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
