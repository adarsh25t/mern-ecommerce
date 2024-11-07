import StarRating from '@/components/common/StarRating'
import { Button } from '@/components/ui/button'
import { ProductItemProps } from '@/config/types';
import { IndianRupee, ShoppingCartIcon, Heart } from 'lucide-react'
import { useState } from 'react'

function ProductItem({
    image,
    title,
    rating,
    sellPrice,
    price
}:ProductItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [liked, setLiked] = useState(false);  // Track liked state

    const handleHeartClick = () => {
        setLiked(!liked);  // Toggle the liked state on click
    }

    return (
        <div className='bg-white p-3 rounded-md shadow-sm flex flex-col gap-3 w-full h-[350px]'>
            <div 
                className="flex justify-center items-center h-56 bg-gray-100 relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-40 h-56 relative">
                    <img
                        src={image}
                        alt={title}
                        className='absolute inset-0 w-full h-full object-contain'
                    />
                    <div 
                        className={`absolute -right-0 top-0 2xl:top-1 2xl:-right-12 transition-transform duration-300 ease-in-out ${
                            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                        }`}
                    >
                        <Heart 
                            size={24} // Set the size to 24px
                            className={`cursor-pointer transition-colors duration-300 rounded-full ${
                                liked ? 'text-red-400' : 'text-zinc-800'
                            }`} 
                            onClick={handleHeartClick} // Trigger toggle on click
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 flex-grow">
                <h1 className='text-sm font-medium line-clamp-2 h-10'>{title}</h1>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <StarRating rating={rating} />
                        <div className="flex gap-2 mt-auto">
                            <p className='flex items-center text-zinc-900 text-base'><IndianRupee size={16} /> {sellPrice}</p>
                            <p className='flex items-center text-zinc-600 line-through text-sm'><IndianRupee size={15} /> {price}</p>
                        </div>
                    </div>
                    <Button size={'icon'} className='product-cart-icon'>
                        <ShoppingCartIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
