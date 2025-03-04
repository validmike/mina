import { Link, router } from '@inertiajs/react'
import { FaShoppingCart, FaEye, FaFileInvoice } from "react-icons/fa";

const Group = () => {


  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 transition-transform hover:scale-105">
      <img
        src='https://files.catbox.moe/jzmoba.jpg'
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-3">
        <h3 className="text-lg font-semibold">4. VIP Group</h3>
        <p className="text-gray-600 text-sm mt-1">Get Bundle pack plus 500 - 1000 videos in a telegram group that you will be the only member</p>
        <p className="text-gray-800 font-medium mt-2">Size: 66GB in zip files + 500 - 1000 videos on telegram</p>
        <p className="text-green-600 mt-1">Delivery: in a Telegram group</p>
        <p className="text-xl font-bold mt-2">$20 or 25$</p>
        <p className="text-xl font-bold mt-2"> <span className='text-red-800'>DISCOUNT:</span> you can get a $10 discount if you have already purchased a pack.</p>
      </div>

      {/* Buttons section */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        {/* Buy Button - Sends POST request */}
        <Link
          as='button'
          href='/products/group'
          className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <FaShoppingCart /> Order NOW
        </Link>

        <div className="flex flex-row sm:flex-col gap-2 w-full">
          <Link href='/demos/group' className="bg-gray-200 text-gray-800 py-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-gray-300">
            <FaEye /> Preview
          </Link>

          <Link as='button' href='/proofs' className="bg-yellow-500 text-white py-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-yellow-600">
            <FaFileInvoice /> Proof
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Group;
