import Link from "next/link";

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition">
        <h3 className="text-3xl font-bold mb-4">Quote Audit</h3>
        <div className="text-6xl font-black mb-6 text-amber-500">$49</div>
        <Link href="https://gumroad.com/l/heartlandaudit" className="block bg-amber-400 text-black font-bold py-4 rounded-full hover:bg-amber-300">
          Buy Now
        </Link>
      </div>
      <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-black rounded-2xl shadow-2xl p-10 text-center ring-4 ring-amber-600 scale-105">
        <h3 className="text-4xl font-bold mb-4">Full Representation</h3>
        <div className="text-7xl font-black mb-6">$1,999</div>
        <Link href="mailto:hello@heartlandhandshake.com" className="block bg-black text-white font-bold py-4 rounded-full hover:bg-gray-900">
          Inquire Now
        </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition">
        <h3 className="text-3xl font-bold mb-4">Info Plan (VIP)</h3>
        <div className="text-6xl font-black mb-6 text-amber-500">$99<span className="text-3xl">/mo</span></div>
        <Link href="/login" className="block bg-amber-400 text-black font-bold py-4 rounded-full hover:bg-amber-300">
          Join VIP
        </Link>
      </div>
    </div>
  );
}
