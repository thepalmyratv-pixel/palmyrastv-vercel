"use client";
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

{/* Hero Video */}
<section className="px-6 py-8">

  <div className="max-w-7xl mx-auto">

    <h1 className="text-4xl md:text-6xl font-bold mb-3">
      LIVE TV
    </h1>

    <p className="text-gray-400 mb-6">
      Watch Live Streaming Anytime
    </p>

    {/* Main Featured Video */}
    <div className="relative aspect-video rounded-2xl overflow-hidden">

  <iframe
    src="https://www.youtube.com/embed/Kb5BtqOnYJw?autoplay=1"
    className="absolute inset-0 w-full h-full"
    allowFullScreen
  />

</div>

  </div>

</section>

{/* OTT Categories */}
<section className="px-8 py-10 space-y-12">

  {/* Trending */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🔥 Trending Now</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Latest Releases */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🆕 Latest Releases</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Coming Soon */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">⏳ Coming Soon</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_5" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_6" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* FIFA World Cup */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">⚽ FIFA World Cup</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_7" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_8" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Match Highlights */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🎥 Match Highlights</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_9" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_10" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Exclusive Interviews */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🎤 Exclusive Interviews</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_11" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_12" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Football Academy */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🏃 Football Academy</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_13" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_14" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Greatest Moments */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">⭐ Greatest Moments</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_15" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_16" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Football Stories */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">📖 Football Stories</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_17" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_18" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Football History */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🏆 Football History</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_19" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_20" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
  </div>

  {/* Classic Matches */}
  <div>
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-bold">🎬 Classic Matches</h2>
      <a href="/watch" className="text-red-500 font-semibold">More →</a>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_21" className="w-full h-64 rounded-xl" allowFullScreen />
      <iframe src="https://www.youtube.com/embed/VIDEO_ID_22" className="w-full h-64 rounded-xl" allowFullScreen />
    </div>
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