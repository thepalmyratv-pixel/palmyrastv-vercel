const sections = [
  "Trending Now",
  "Latest Videos",
  "Palmyras TV Originals",
  "Tamil News",
  "World News",
  "Sports",
  "Football",
  "Cricket",
  "Music",
  "Interviews",
  "Documentaries",
  "Entertainment",
  "Short Films",
  "Kids Corner",
  "Devotional",
  "Comedy",
  "Technology",
  "Business",
  "Travel",
  "Live Events",
];

const sampleVideos = [
  "https://www.youtube.com/embed/Kb5BtqOnYJw",
  "https://www.youtube.com/embed/C2xUv4Q3bVw",
  "https://www.youtube.com/embed/Kb5BtqOnYJw",
  "https://www.youtube.com/embed/C2xUv4Q3bVw",
  "https://www.youtube.com/embed/Kb5BtqOnYJw",
];

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Banner */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-4">
            <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold">
              PALMYRAS TV EXCLUSIVE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Featured Video
          </h1>

          <p className="text-zinc-400 text-lg mb-6">
            Watch the latest content from Palmyras TV.
          </p>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <iframe
              src="https://www.youtube.com/embed/Kb5BtqOnYJw?autoplay=1&mute=1"
              className="w-full aspect-video"
              allow="autoplay"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-14">

          {sections.map((title) => (
            <div key={title}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">
                  {title}
                </h2>

                <a
                  href="/watch"
                  className="text-red-500 font-semibold"
                >
                  View All →
                </a>
              </div>

              <div className="flex gap-5 overflow-x-auto pb-2">

                {sampleVideos.map((video, index) => (
                  <div
                    key={index}
                    className="min-w-[320px] md:min-w-[380px]"
                  >
                    <iframe
                      src={video}
                      className="w-full aspect-video rounded-xl border border-zinc-800"
                      allowFullScreen
                    />

                    <h3 className="mt-3 font-semibold">
                      Video Title {index + 1}
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Palmyras TV
                    </p>
                  </div>
                ))}

              </div>
            </div>
          ))}

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

    </div>
  );
}