export default function StorePage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-10">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">🛒 PalmyrasTV Store</h1>
        <p className="text-gray-400 mt-2">
          Official merchandise and digital products
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Product 1 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <img
            src="https://via.placeholder.com/400x400"
            alt="T-Shirt"
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              PalmyrasTV T-Shirt
            </h3>
            <p className="text-red-500 font-bold mt-2">
              ₹499
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-3">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Cap"
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              PalmyrasTV Cap
            </h3>
            <p className="text-red-500 font-bold mt-2">
              ₹299
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-3">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Coffee Mug"
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              PalmyrasTV Mug
            </h3>
            <p className="text-red-500 font-bold mt-2">
              ₹249
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-3">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Premium Membership"
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              Premium Membership
            </h3>
            <p className="text-red-500 font-bold mt-2">
              ₹999
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-3">
              Buy Now
            </button>
          </div>
        </div>

      </div>

    </main>
  );
}