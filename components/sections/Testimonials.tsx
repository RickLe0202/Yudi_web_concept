"use client";

import { testimonials } from '@/lib/mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen mt-8 md:mt-10 flex flex-col justify-center overflow-hidden">
      {/* Make the animation smoother */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What users say about us
          </p>
        </div>

        {/* Container cho Swiper dọc - Đã bỏ background riêng để dùng background gốc của bạn */}
        <div className="h-[550px] max-w-2xl mx-auto relative">
          {/* Lớp phủ mờ (Optional) - Giúp card mờ dần khi trôi ra khỏi vùng nhìn thấy */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-transparent z-10 pointer-events-none"></div>

          <Swiper
            direction={'vertical'}
            slidesPerView={2.5}
            spaceBetween={30}
            loop={true}
            speed={7000} // Tăng lên 7000 để trôi chậm hơn nữa nếu muốn
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}