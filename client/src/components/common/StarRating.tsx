import { StarRatingProps } from '@/config/types';
import { Star } from 'lucide-react';

const StarRating = ({ rating, maxRating = 5, size = 18, color = "#029f24" }:StarRatingProps) => {
    const stars = [];
    
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        // Full star
        stars.push(<Star key={i} size={size} fill={color} color={color} />);
      } else if (i - 0.5 <= rating) {
        // Half star
        stars.push(
          <div key={i} className="relative inline-block">
            <Star size={size} color={color} />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star size={size} fill={color} color={color} />
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(<Star key={i} size={size} color={color} />);
      }
    }
  
    return <div className="flex">{stars}</div>;
  };

export default StarRating