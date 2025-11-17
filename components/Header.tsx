import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Heartland Handshake
        </Link>
        <nav className="flex gap-8 items-center">
          <Link href="/services" className="hover:text-amber-400 transition">Services</Link>
          <Link href="/blog" className="hover:text-amber-400 transition">Blog</Link>
          <Link href="/login" className="hover:text-amber-400 transition">Login</Link>
          <Link href="/pricing" className="btn-primary text-lg">Get Started</Link>
        </nav>
      </div>
    </header>
  );
