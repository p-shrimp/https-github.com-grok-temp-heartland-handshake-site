export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      <div className="card text-center">
        <h3 className="text-3xl font-bold mb-4">Quote Audit</h3>
        <div className="text-6xl font-black mb-6">$49</div>
        <ul className="space-y-4 mb-8 text-left">
          <li>Line-by-line dealer quote review</li>
          <li>Hidden fees exposed</li>
          <li>PDF report + action plan</li>
        </ul>
        <a href="https://gumroad.com/l/heartlandaudit" className="btn-primary w-full block">Buy Now</a>
      </div>

      <div className="card text-center ring-4 ring-amber-400 transform scale-105">
        <h3 className="text-3xl font-bold mb-4">Full Representation</h3>
        <div className="text-6xl font-black mb-6">$1,999</div>
        <ul className="space-y-4 mb-8 text-left">
          <li>I contact dealers for you</li>
          <li>Full negotiation + contract review</li>
          <li>Save $3k+ or service is free</li>
        </ul>
        <a href="mailto:hello@heartlandhandshake.com" className="btn-primary w-full block">Inquire Now</a>
      </div>

      <div className="card text-center">
        <h3 className="text-3xl font-bold mb-4">Info Plan (VIP)</h3>
        <div className="text-6xl font-black mb-6">$99<span className="text-2xl">/mo</span></div>
        <ul className="space-y-4 mb-8 text-left">
          <li>Premium automotive intel</li>
          <li>Dealer blacklist database</li>
          <li>Live market pricing data</li>
        </ul>
        <a href="/login" className="btn-primary w-full block">Join VIP</a>
      </div>
    </div>
  );
}
