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

      {/* Hero Banner */}
      <section
        className="min-h-[80vh] bg-cover bg-center flex items-center px-10 py-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
        }}
      >
<div className="relative w-full max-w-5xl">

  <img
    src="https://picsum.photos/1200/700"
    alt="Live TV"
    className="w-full rounded-xl"
  />

  <button
    onClick={() => {
      const player = document.getElementById("live-player");
      if (player) player.style.display = "block";
    }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="bg-red-600 text-white px-8 py-4 rounded-full text-2xl">
      ▶ LIVE
    </div>
  </button>

</div>

<div
  id="live-player"
  style={{ display: "none" }}
  className="mt-6"
>
  <iframe
    src="https://famelack.com/"
    className="w-full h-[70vh] rounded-xl"
    allowFullScreen
  />
</div>

</section>

      {/* OTT Categories */}

<section className="px-8 py-10">

  {/* Trending */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🔥 Trending Now</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?1" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?2" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Latest */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🆕 Latest Releases</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?3" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?4" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Coming Soon */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">⏳ Coming Soon</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?5" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?6" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* FIFA World Cup */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">⚽ FIFA World Cup</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?7" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?8" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Highlights */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🎥 Match Highlights</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?9" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?10" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Interviews */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🎤 Exclusive Interviews</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?11" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?12" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Academy */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🏃 Football Academy</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?13" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?14" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Moments */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">⭐ Greatest Moments</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?15" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?16" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Stories */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">📖 Football Stories</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?17" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?18" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* History */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🏆 Football History</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?19" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?20" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Classics */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🎬 Classic Matches</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://picsum.photos/320/180?21" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://picsum.photos/320/180?22" className="min-w-[320px] rounded-xl" alt="" /></a>
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