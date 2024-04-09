import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../assets/carslide.jpg"
import img2 from "../../assets/forslide2.jpg"
import "./slider.css"
function Slider() {
    return (
        <div className="slider">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide style={{ backgroundImage: `url(${img1})` }}></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img2})` }}></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img1})` }}></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img2})` }}></SwiperSlide>
            </Swiper>

        </div>

    )
}

export default Slider;