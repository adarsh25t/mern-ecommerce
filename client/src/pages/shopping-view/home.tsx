import ProductAds from '@/components/shopping-view/ads-item'
import ShopCategories from '@/components/shopping-view/categories'
import CategoryListHeader from '@/components/shopping-view/category-list-header'
import { ImageCarousel } from '@/components/shopping-view/image-carousel'

import ProductCarousel from '@/components/shopping-view/products-carousel'


function ShoppingHomePage() {
  return (
    <div className='flex flex-col gap-5 mx-5 sm:mx-0'>
      <ShopCategories />

      {/* image slider */}
      <div className="">
        <ImageCarousel />
      </div>

      {/* add home page adds */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/175a24b6c33d7393.jpg?q=20"}
        />
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a9389f8db9e00e8e.jpg?q=20"}
        />
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/71c06ab67d5bd1fe.jpg?q=20"}
        />
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/932effae115ddebf.jpg?q=20"}
        />
      </div>

      {/* product list header */}
      <CategoryListHeader
        title={"Featured Products"}
        link={"/featured-products"}
        urltext={"View All"}
      />

      {/* Add your home page content here */}
      <ProductCarousel />

      {/* product list header */}
      <CategoryListHeader
        title={"Featured Products"}
        link={"/featured-products"}
        urltext={"View All"}
      />

      {/* Add your home page content here */}
      <ProductCarousel />


      {/* add home page adds */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/175a24b6c33d7393.jpg?q=20"}
        />
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a9389f8db9e00e8e.jpg?q=20"}
        />
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/71c06ab67d5bd1fe.jpg?q=20"}
        />
        <ProductAds
          image={"https://rukminim2.flixcart.com/fk-p-flap/520/280/image/932effae115ddebf.jpg?q=20"}
        />
      </div>

      {/* product list header */}
      <CategoryListHeader
        title={"Featured Products"}
        link={"/featured-products"}
        urltext={"View All"}
      />

      {/* Add your home page content here */}
      <ProductCarousel />

      {/* product list header */}
      <CategoryListHeader
        title={"Featured Products"}
        link={"/featured-products"}
        urltext={"View All"}
      />

      {/* Add your home page content here */}
      <ProductCarousel />
    </div>
  )
}

export default ShoppingHomePage