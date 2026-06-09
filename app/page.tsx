export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white pb-24">

      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black">
        <h1 className="text-2xl font-bold text-red-600">
          PalmyrasTV
        </h1>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/watch">Watch</a>
          <a href="/store">Store</a>
          <a href="/profile">Profile</a>
        </div>
      </nav>

      {/* Hero Banner */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center px-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
        }}
      >
        <div>
          <h1 className="text-6xl font-bold mb-4">
            LIVE TV
          </h1>

          <p className="text-xl mb-6">
            Watch Live Streaming Anytime
          </p>

          <div className="mt-6">
            
            <iframe
    src="https://famelack.com/"
    className="w-full max-w-5xl h-[70vh] rounded-xl"
    allowFullScreen
  />
        </div>
      </section>

      {/* Popular Videos */}
      <section className="p-8">
        <h2 className="text-3xl mb-6">
          Popular Videos
        </h2>

        <div className="flex gap-4 overflow-x-auto">
          <img src="https://picsum.photos/300/180?1" className="rounded-lg" alt="" />
          <img src="https://picsum.photos/300/180?2" className="rounded-lg" alt="" />
          <img src="https://picsum.photos/300/180?3" className="rounded-lg" alt="" />
          <img src="https://picsum.photos/300/180?4" className="rounded-lg" alt="" />
        </div>
      </section>

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