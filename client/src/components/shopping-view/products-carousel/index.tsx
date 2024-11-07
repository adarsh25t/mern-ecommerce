


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductItem from "../product-item";

const productItems = [
    {
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/m/4/u/-original-imahfes3epqp8ahr.jpeg?q=70",
        title: "SAMSUNG M5 81.28 cm (32 inch)",
        rating: 4.5,
        sellPrice: 799.99,
        price: 800.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/i/o/k/9-gola-v-may-airfax-original-imahf5uytqrzwqfk.jpeg?q=70",
        title: "Velcro Sneakers For Boys  (Black)",
        rating: 3.5,
        sellPrice: 130000.00,
        price: 8000.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kids-shoe/d/3/s/2-sh-tarzan-04-kids-asian-original-imahfzr7zby23g5t.jpeg?q=70",
        title: "Lace Sneakers For Boys",
        rating: 3.5,
        sellPrice: 130000.00,
        price: 8000.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/w/3/l/l-1-091-house-of-common-original-imah4f58tngquvmb.jpeg?q=70",
        title: "Men Solid Grey Track Pants",
        rating: 4,
        sellPrice: 455.00,
        price: 600.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-pant/b/9/y/s-solid-sports-wear-yazole-original-imah2gjhtkyfmvpp.jpeg?q=70",
        title: "Men Printed Black Track Pants",
        rating: 3.5,
        sellPrice: 300.00,
        price: 400.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/x/f/-original-imah4khx9u3zxdbk.jpeg?q=70",
        title: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 3.5,
        sellPrice: 110000.00,
        price: 14599.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/u/k/-original-imah38dbzpraunnj.jpeg?q=70",
        title: "realme 13 Pro+ 5G (Monet Gold, 256 GB)",
        rating: 3.5,
        sellPrice: 32000.00,
        price: 30000.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/m/4/u/-original-imahfes3epqp8ahr.jpeg?q=70",
        title: "SAMSUNG M5 81.28 cm (32 inch)",
        rating: 4.5,
        sellPrice: 799.99,
        price: 800.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/i/o/k/9-gola-v-may-airfax-original-imahf5uytqrzwqfk.jpeg?q=70",
        title: "Velcro Sneakers For Boys  (Black)",
        rating: 3.5,
        sellPrice: 130000.00,
        price: 8000.00
    },
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kids-shoe/d/3/s/2-sh-tarzan-04-kids-asian-original-imahfzr7zby23g5t.jpeg?q=70",
        title: "Lace Sneakers For Boys",
        rating: 3.5,
        sellPrice: 130000.00,
        price: 8000.00
    }
];


function ProductCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full carousel-images"
        >
            <CarouselContent className="flex w-80 gap-3">
                {productItems.map((item, index) => (
                    <CarouselItem key={index} className="">
                        <ProductItem
                            image={item.image}
                            title={item.title}
                            rating={item.rating}
                            sellPrice={item.sellPrice}
                            price={item.price}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ProductCarousel