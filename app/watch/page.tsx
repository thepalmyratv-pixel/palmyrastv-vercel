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

    </div>
  );
}