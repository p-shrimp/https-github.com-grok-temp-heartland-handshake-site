import Link from "next/link";

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition">
        <h3 className="text-2xl font-bold mb-4">Quote Audit</h3>
        <div className="text-6xl font-black mb-6">$49</div>
        <ul className="text-left space-y-3 mb-8">
          <li>• Line-by-line dealer quote review</li>
          <li>• Hidden fees exposed</li>
          <li>• PDF report + action plan</li>
        </ul>
        <Link href="https://gumroad.com/l/heartlandaudit" className="bg-amber-400 text-black font-bold py-4 px-8 rounded-full block hover:bg-amber-300">
          Buy Now
        </Link>
      </div>

      <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-black rounded-2xl shadow-2xl p-10 text-center ring-4 ring-amber-600 transform scale-105">
        <h3 className="text-3xl font-bold mb-4">Full Representation</h3>
        <div className="text-7xl font-black mb-6">$1,999</div>
        <ul className="text-left space-y-3 mb-8">
          <li>• I contact dealers for you</li>
          <li>• Full negotiation + contract review</li>
          <li>• Save $3k+ or service is free</li>
        </ul>
        <Link href="mailto:hello@heartlandhandshake.com" className="bg-black text-white font-bold py-4 px-8 rounded-full block hover:bg-gray-900">
          Inquire Now →
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition">
        <h3 className="text-2xl font-bold mb-4">Info Plan (VIP)</h3>
        <div className="text-6xl font-black mb-6">$99<span className="text-3xl">/mo</span></div>
        <ul className="text-left space-y-3 mb-8">
          <li>• Premium automotive intel</li>
          <li>• Dealer blacklist database</li>
          <li>• Live market pricing data</li>
        </ul>
        <Link href="/login" className="bg-amber-400 text-black font-bold py-4 px-8 rounded-full block hover:bg-amber-300">
          Join VIP
        </Link>
      </div>
    </div>
  );
}
