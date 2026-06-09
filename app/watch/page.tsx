export default function WatchPage() {
  return (
    <main className="bg-black min-h-screen text-white p-6">

      <h1 className="text-4xl font-bold mb-6">
        LIVE TV
      </h1>

      <iframe
        src="https://famelack.com/"
        className="w-full h-[80vh] rounded-xl"
        allowFullScreen
      />

    </main>
  );
}