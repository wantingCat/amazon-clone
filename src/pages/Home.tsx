import BannerCarousel from "../components/UI/BannerCarousel";
import ProductDisplayHome from "../components/UI/card/ProductDisplayHome";

function Home() {
    return (
        <div>
            <BannerCarousel />
            <div className="home_product_display">
                <ProductDisplayHome />
            </div>
        </div>
    )
}

export default Home;