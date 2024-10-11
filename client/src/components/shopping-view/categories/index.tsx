import React from 'react'

const categories = [
    { 
        name: 'Top Offers', 
        category: 'tech',
        image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100"
    },
    { 
        name: 'Mobiles & Tablets', 
        category: 'literature',
        image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/44e10b16e649b691.jpg?q=100"
    },
    { 
        name: 'TVs & Appliances', 
        category: 'fashion',
        image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/717b5077a5e25324.jpg?q=100"
    },
    { 
        name: 'Fashion', 
        category: 'home',
        image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9d4e9c605fc1d2d3.jpg?q=100"
    },
    { 
        name: 'Beauty', 
        category: 'athletics',
        image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/a5e656672d0548dd.jpg?q=100"

    },
    { 
        name: 'Home & Kitchen', 
        category: 'kids',
        image: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5b813b64a3179898.jpg?q=100"
    },
    { 
        name: 'Furniture', 
        category: 'cosmetics',
        image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/7a5e96c10ada8a56.jpg?q=100"
    },
    { 
        name: 'Grocery', 
        category: 'cars',
        image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/25f400c36bc3487d.jpg?q=100"
    }
];

function ShopCategories() {
    return (
        <div className="w-full px-10 bg-white rounded-md shadow-sm overflow-x-auto overflow-y-hidden scrollbar-none">
            <div className="flex justify-center space-x-4 p-4 whitespace-nowrap">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-1 md:gap-2 p-2 text-center cursor-pointer"
                    >
                        <img src={item.image} className='w-10 h-10 md:w-16 md:h-16' alt="" />
                        <p className="text-xs sm:text-sm font-medium truncate">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCategories