import tshirt from "@/assets/images/t-shirt.jpeg";
import jean from "@/assets/images/jean.webp";
import jacket from "@/assets/images/jacket.jpg";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "T-shirt",
    price: 20,
    image: tshirt,
  },
  {
    name: "Jean",
    price: 40,
    image: jean,
  },
  {
    name: "jacket",
    price: 60,
    image: jacket,
  },
];

function Shop() {
  return (
    <section className="flex grow bg-gray-200">
      <div className="container mx-auto">
        <div className="m-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
