import { useState } from "react";
import { Link } from "react-router";

interface productType {
  name: string;
  price: number;
  image: string;
}
function ProductCard({ name, price, image }: productType) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <div className="relative border border-gray-300 shadow-xl">
      {!imageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
      )}
      <img
        src={image}
        alt={name}
        className={`h-95 w-full object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={handleImageLoaded}
      />
      <div className="flex justify-between px-2 py-4">
        <div>
          <p className="text-lg font-bold md:text-2xl">{name}</p>
          <p className="text-base text-gray-600 md:text-lg">$ {price}</p>
        </div>
        <Link
          to="cart"
          className="flex items-center rounded-3xl bg-sky-600 px-2 text-white md:text-lg"
        >
          Add to Card
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
