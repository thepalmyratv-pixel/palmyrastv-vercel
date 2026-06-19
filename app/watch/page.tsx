const categories = [
  {
    title: "Trending Now",
    videos: [
      "https://www.youtube.com/embed/Kb5BtqOnYJw",
      "https://www.youtube.com/embed/Kb5BtqOnYJw",
      "https://www.youtube.com/embed/Kb5BtqOnYJw",
      "https://www.youtube.com/embed/Kb5BtqOnYJw",
    ],
  },
  {
    title: "Latest Releases",
    videos: [
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
    ],
  },
  {
    title: "Sports Highlights",
    videos: [
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
    ],
  },
  {
    title: "Entertainment",
    videos: [
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
    ],
  },
  {
    title: "Music Videos",
    videos: [
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
    ],
  },
  {
    title: "News & Updates",
    videos: [
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
      "https://www.youtube.com/embed/C2xUv4Q3bVw",
    ],
  },
];

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">

          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PALMYRAS TV EXCLUSIVE
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Featured Video
          </h1>

          <p className="text-gray-400 mb-6 text-lg">
            Watch the latest videos from Palmyras TV.
          </p>

          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(239,68,68,0.20)]">
            <iframe
              src="https://www.youtube.com/embed/Kb5BtqOnYJw?autoplay=1&mute=1"
              className="w-full aspect-video"
              allow="autoplay"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* Video Categories */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {categories.map((category) => (
            <div key={category.title}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {category.title}
                </h2>

                <a
                  href="/watch"
                  className="text-red-500 hover:text-red-400 font-semibold"
                >
                  View All →
                </a>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {category.videos.map((video, index) => (
                  <iframe
                    key={index}
                    src={video}
                    className="min-w-[280px] md:min-w-[350px] aspect-video rounded-xl border border-zinc-800"
                    allowFullScreen
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}