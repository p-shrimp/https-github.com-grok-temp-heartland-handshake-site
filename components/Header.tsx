import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Heartland Handshake
        </Link>
        <nav className="flex gap-8 items-center">
          <Link href="/pricing" className="hover:text-amber-400 transition">Pricing</Link>
          <Link href="/blog" className="hover:text-amber-400 transition">Blog</Link>
          <Link href="/login" className="hover:text-amber-400 transition">Login</Link>
          <Link href="/pricing" className="bg-amber-400 text-black font-bold px-8 py-3 rounded-full hover:bg-amber-300 transition">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
