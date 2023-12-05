import Slider from "react-slick";
import classes from "./BannerCarousel.module.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import banner1 from "../../assets/banners/ad_banner_1.jpg";
import banner2 from "../../assets/banners/ad_banner_2.jpg";
import banner3 from "../../assets/banners/ad_banner_3.jpg";
import banner4 from "../../assets/banners/prime_banner_1.jpg";
import banner5 from "../../assets/banners/prime_banner_2.jpg";
import banner6 from "../../assets/banners/prime_banner_3.jpg";

function BannerCarousel() {
    const settings = {
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 5000,
    };

    return (
        <div className={classes['top_container']}>
            <Slider {...settings} className={classes.main}>
                <div>
                    <img src={banner1} alt="banner1" />
                </div>
                <div>
                    <img src={banner2} alt="banner2" />
                </div>
                <div>
                    <img src={banner3} alt="banner3" />
                </div>
                <div>
                    <img src={banner4} alt="banner4" />
                </div>
                <div>
                    <img src={banner5} alt="banner5" />
                </div>
                <div>
                    <img src={banner6} alt="banner6" />
                </div>
            </Slider>
        </div>
    )
}

export default BannerCarousel;