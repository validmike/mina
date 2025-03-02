import { Link, router } from '@inertiajs/react'
import { FaShoppingCart, FaEye, FaFileInvoice } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const handleBuy = () => {
    router.post(route("orders.store"), { product_id: product.id });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-3">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <p className="text-gray-800 font-medium mt-2">Size: {product.size}</p>
        <p className="text-green-600 mt-1">Delivery: {product.delivery}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>
      </div>

      {/* Buttons section */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        {/* Buy Button - Sends POST request */}
        <button
          onClick={handleBuy}
          className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <FaShoppingCart /> Buy
        </button>

        <div className="flex flex-row sm:flex-col gap-2 w-full">
          <Link href={route('demos.index', { product_id: product.id })} className="bg-gray-200 text-gray-800 py-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-gray-300">
            <FaEye /> Preview
          </Link>

          <button className="bg-yellow-500 text-white py-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-yellow-600">
            <FaFileInvoice /> Proof
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
