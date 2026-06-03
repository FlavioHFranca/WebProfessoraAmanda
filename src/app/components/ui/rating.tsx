import { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  maxStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

export function Rating({ maxStars = 5, initialRating = 0, onRatingChange }: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRating = (currentRating: number) => {
    setRating(currentRating);
    if (onRatingChange) {
      onRatingChange(currentRating);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1;
        const isStarred = starValue <= (hoverRating ?? rating);

        return (
          <button
            key={index}
            type="button"
            className="transition-transform duration-150 hover:scale-110 focus:outline-none"
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(null)}
          >
            <Star
              size={24}
              strokeWidth={2}
              className={`transition-colors duration-150 ${
                isStarred
                  ? 'fill-amber-400 text-amber-400' // Estrela ativa (Amarela)
                  : 'text-gray-300 dark:text-gray-600' // Estrela inativa (Cinza)
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}