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
          {/* Footer */}
<footer className="bg-zinc-950 border-t border-zinc-800 px-8 py-12 mt-10">

  <div className="grid md:grid-cols-3 gap-10">

    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-3">
        PalmyrasTV
      </h3>

      <p className="text-gray-400">
        PalmyrasTV is a modern OTT streaming platform for
        entertainment, sports, movies and digital culture connect.
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Quick Links
      </h4>

      <div className="flex flex-col gap-2 text-gray-400">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </div>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Follow Us
      </h4>

      <div className="flex flex-col gap-2 text-gray-400">
        <a href="#">YouTube</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">X / Twitter</a>
      </div>
    </div>

  </div>

  <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500 text-sm">
    © 2026 - PalmyrasTV by Assist Network • All Rights Reserved
  </div>

</footer>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 z-50">

        <a href="/" className="flex flex-col items-center text-white">
          <span className="text-xl">⌂</span>
          <span className="text-xs">Home</span>
        </a>

        <a href="/watch" className="flex flex-col items-center text-white">
          <span className="text-xl">▶</span>
          <span className="text-xs">Watch</span>
        </a>

        <a href="/store" className="flex flex-col items-center text-white">
          <span className="text-xl">▢</span>
          <span className="text-xs">Store</span>
        </a>

        <a href="/profile" className="flex flex-col items-center text-white">
          <span className="text-xl">👤</span>
          <span className="text-xs">Profile</span>
        </a>

      </div>

    </main>
  );
}