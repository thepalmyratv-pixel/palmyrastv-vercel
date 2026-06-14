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

  {/* Trending Now */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🔥 Trending Now</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Latest Releases */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🆕 Latest Releases</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Coming Soon */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">⏳ Coming Soon</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* FIFA World Cup */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">⚽ FIFA World Cup</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Match Highlights */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🎥 Match Highlights</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/ktvTqknDobU/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Exclusive Interviews */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🎤 Exclusive Interviews</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/CevxZvSJLk8/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Football Academy */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🏃 Football Academy</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Greatest Moments */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">⭐ Greatest Moments</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Football Stories */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">📖 Football Stories</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/hT_nvWreIhg/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/pRpeEdMmmQ0/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Football History */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🏆 Football History</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/09R8_2nJtjg/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/lWA2pjMjpBs/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
    </div>
  </div>

  {/* Classic Matches */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-5">🎬 Classic Matches</h2>
    <div className="flex gap-4 overflow-x-auto">
      <a href="/watch"><img src="https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
      <a href="/watch"><img src="https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg" className="min-w-[320px] rounded-xl" alt="" /></a>
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