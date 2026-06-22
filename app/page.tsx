"use client";
export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white pb-24">

      {/* Top Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black">
        <h1 className="text-2xl font-bold text-red-600">
          PalmyrasTV
        </h1>
      </header>

{/* Hero Featured Video */}

<section className="px-6 py-8">

  <div className="max-w-7xl mx-auto">

    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
      Featured Today
    </span>

    <h1 className="text-4xl md:text-6xl font-bold mb-3">
      Trending Now
    </h1>

    <p className="text-gray-400 mb-6 text-lg">
      Watch the latest trending videos, entertainment, news and sports.
    </p>

    {/* Main Video */}

    <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(239,68,68,0.20)] mb-6">

      <iframe
        src="https://www.youtube.com/embed/Kb5BtqOnYJw"
        className="w-full aspect-video"
        allowFullScreen
      />

    </div>

    {/* 3 Featured Videos */}

    <div className="flex gap-4 overflow-x-auto">

      <iframe
        src="https://www.youtube.com/embed/Kb5BtqOnYJw"
        className="w-[350px] h-[200px] rounded-xl flex-shrink-0"
        allowFullScreen
      />

      <iframe
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        className="w-[350px] h-[200px] rounded-xl flex-shrink-0"
        allowFullScreen
      />

      <iframe
        src="https://www.youtube.com/embed/ysz5S6PUM-U"
        className="w-[350px] h-[200px] rounded-xl flex-shrink-0"
        allowFullScreen
      />

    </div>

  </div>

</section>

{/* OTT Categories */}
<section className="px-8 py-10 space-y-12">

  {/* Trending */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Trending Now</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Latest Releases */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Latest Releases</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Upcoming */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Upcoming</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Premier League */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Premier League</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Match Highlights */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Match Highlights</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Exclusive Interviews */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Exclusive Interviews</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Academy */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Academy</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Memorable Moments */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Memorable Moments</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Stories */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Stories</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Football History */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Football History</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
    </div>
  </div>

  {/* Classic Matches */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Classic Matches</h2>
      <a href="/watch" className="text-red-500 font-semibold">
        More →
      </a>
    </div>

    <div className="flex gap-4 horizontal-scroll scrollbar-hide">
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
      <iframe
        src="https://youtube.com/embed/C2xUv4Q3bVw"
        className="min-w-[280px] md:min-w-[320px] aspect-video rounded-xl"
        allowFullScreen
      />
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