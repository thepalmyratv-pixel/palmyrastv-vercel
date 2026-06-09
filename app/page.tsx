export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white pb-24">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black">
        <h1 className="text-2xl font-bold text-red-600">PalmyrasTV</h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Watch</a>
          <a href="#">Store</a>
          <a href="#">Profile</a>
        </div>
      </nav>

        {/* Mobile Bottom Navigation */}
<div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 md:hidden">
  <a href="/" className="flex flex-col items-center text-white">
    <span>⌂</span>
    <span className="text-xs">Home</span>
  </a>

  <a href="/watch" className="flex flex-col items-center text-white">
    <span>▶</span>
    <span className="text-xs">Watch</span>
  </a>

  <a href="/store" className="flex flex-col items-center text-white">
    <span>🛍</span>
    <span className="text-xs">Store</span>
  </a>

  <a href="/profile" className="flex flex-col items-center text-white">
    <span>👤</span>
    <span className="text-xs">Profile</span>
  </a>
</div>

      {/* Hero Banner */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center px-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
        }}
      >
        <div>
          <h1 className="text-6xl font-bold mb-4">LIVE TV</h1>

          <p className="text-xl mb-6">
            Watch Live Streaming Anytime
          </p>

          <a
            href="/watch"
            className="bg-red-600 px-6 py-3 rounded-lg text-lg"
          >
            ▶ Watch Live
          </a>
        </div>
      </section>

      {/* Popular Videos */}
      <section className="p-8">
        <h2 className="text-3xl mb-6">Popular Videos</h2>

        <div className="flex gap-4 overflow-x-auto">

          <img
            src="https://picsum.photos/300/180?1"
            className="rounded-lg"
            alt=""
          />

          <img
            src="https://picsum.photos/300/180?2"
            className="rounded-lg"
            alt=""
          />

          <img
            src="https://picsum.photos/300/180?3"
            className="rounded-lg"
            alt=""
          />

          <img
            src="https://picsum.photos/300/180?4"
            className="rounded-lg"
            alt=""
          />

        </div>
      </section>

    </main>
  );
}
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
    <span className="text-xl">🛍</span>
    <span className="text-xs">Store</span>
  </a>

  <a href="/profile" className="flex flex-col items-center text-white">
    <span className="text-xl">👤</span>
    <span className="text-xs">Profile</span>
  </a>

</div>