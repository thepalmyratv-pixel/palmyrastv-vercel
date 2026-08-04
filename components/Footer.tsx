import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-950 border-t border-zinc-800 px-8 py-12 mt-10 pb-24">

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
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Follow Us
            </h4>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="#">YouTube</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">Facebook</Link>
              <Link href="#">X / Twitter</Link>
            </div>
          </div>

        </div>


        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 - PalmyrasTV by Assist Network Ltd • All Rights Reserved
        </div>

      </footer>


      {/* Bottom Navigation */}

      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 z-50">

        <Link href="/" className="flex flex-col items-center text-white">
          <span className="text-xl">⌂</span>
          <span className="text-xs">Home</span>
        </Link>

        <Link href="/watch" className="flex flex-col items-center text-white">
          <span className="text-xl">▶</span>
          <span className="text-xs">Watch</span>
        </Link>

        <Link href="/store" className="flex flex-col items-center text-white">
          <span className="text-xl">🛍</span>
          <span className="text-xs">Store</span>
        </Link>

        <Link href="/profile" className="flex flex-col items-center text-white">
          <span className="text-xl">👤</span>
          <span className="text-xs">Profile</span>
        </Link>

      </div>
    </>
  );
}