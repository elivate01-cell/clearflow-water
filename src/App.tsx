import { useState } from 'react';

const PRICES = [
  ['Sachet water 50cl', 'Bag of 30', '₦480', '₦460', 'Most ordered'],
  ['Table water 75cl', 'Case of 12', '₦1,700', '₦1,600', ''],
  ['Dispenser bottle 20L', 'Refill / swap', '₦400', '₦350', 'Bottle one-off: ₦3,500'],
  ['Event packs, labelled', '100+ bags', 'Quote', 'Quote', 'Your name on every sachet'],
] as const;

const TIERS = [
  ['50+ bags a week', '₦20 off per bag'],
  ['150+ bags a week', '₦35 off per bag'],
  ['400+ bags a week', '₦50 off per bag + free delivery, any zone'],
] as const;

const AREAS = [
  ['Ikorodu Garage', 'Free', '30 bags'], ['Agric', '₦500', '40 bags'],
  ['Ogolonto', '₦500', '40 bags'], ['Ebute', '₦700', '50 bags'],
  ['Igbogbo', '₦800', '50 bags'], ['Odogunyan', '₦800', '50 bags'],
  ['Gberigbe', '₦900', '60 bags'], ['Imota', '₦900', '60 bags'],
  ['Baiyeku', '₦1,000', '60 bags'], ['Ewu', '₦1,000', '60 bags'],
  ['Ijede', '₦1,200', '80 bags'], ['Agbede', '₦1,200', '80 bags'],
] as const;

const STEPS = [
  ['01', 'Borehole intake', 'Solar-pumped from our 180-ft borehole behind the shop. No tanker water, ever.'],
  ['02', 'Sand & carbon filters', 'Two filter beds changed on schedule, not on luck. Dates are logged.'],
  ['03', 'UV + ozone treatment', 'Every batch passes the UV chamber and gets a measured ozone dose.'],
  ['04', 'Daily lab test', 'Chlorine and pH checked each morning. The results book sits open at the counter.'],
] as const;

const FAQS = [
  ['What is the smallest order you deliver?', '30 bags within Ikorodu Garage. Outside the garage zone, minimums rise with distance — each area card shows its own minimum.'],
  ['Can I get same-day delivery?', 'Yes, if you call before 1pm. After 1pm we schedule for the next morning run.'],
  ['Do you take transfers?', 'Transfer or cash on delivery. Regular vendors can run a weekly invoice after three months of steady orders.'],
  ['Can you label bags for our party?', 'Custom labels start at 200 bags with two working days notice — popular for weddings, burials and church anniversaries.'],
] as const;
export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="cf">
      <div className="strip">
        <span>Licensed borehole operator — Lagos State</span>
        <span className="hot">Call to order: 0803 412 7790</span>
        <span>Mon–Sat 7:00–18:00</span>
      </div>
      <header className="nav">
        <a className="logo" href="#top"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c3.5 4.4 6.5 8.1 6.5 12a6.5 6.5 0 1 1-13 0C5.5 10.1 8.5 6.4 12 2Z" fill="#0E7FC1"/><path d="M9 14a3.2 3.2 0 0 0 3.2 3.2" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg><span>CLEARFLOW<em>WATERS</em></span></a>
        <nav className={open ? 'links open' : 'links'} onClick={() => setOpen(false)}>
          <a href="#prices">Price board</a><a href="#delivery">Delivery</a><a href="#quality">Quality</a><a href="#faq">FAQ</a><a className="cta" href="tel:08034127790">Call to order</a>
        </nav>
        <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}><span/><span/><span/></button>
      </header>
      <section className="hero" id="top">
        <div>
          <p className="eyebrow">Wholesale water · Ikorodu, Lagos</p>
          <h1>Clean water, counted in bags, delivered to your gate.</h1>
          <p className="lede">We run our own borehole, our own filters and our own truck. Vendors, shops and event planners buy from us because the count is always right and the truck leaves when it says it will.</p>
          <div className="acts">
            <a className="b-solid" href="tel:08034127790">Call 0803 412 7790</a>
            <a className="b-line" href="#prices">See today&apos;s price board</a>
          </div>
          <ul className="chips"><li>Bag of 30 — <strong>₦480</strong></li><li>10+ bags — <strong>₦460</strong></li><li>Same-day before 1pm</li></ul>
        </div>
        <div className="art" aria-hidden="true">
          {[0, 1, 2].map((r) => (
            <div className="srow" key={r}>
              {[0, 1, 2].map((c) => (
                <svg className="sachet" key={c} viewBox="0 0 60 84" width="60" height="84">
                  <path d="M6 12 Q30 4 54 12 L56 74 Q30 82 4 74 Z" fill="#EAF6FF" stroke="#7FB9E6" strokeWidth="1.5"/>
                  <path d="M8 34 Q30 28 52 34 L52 70 Q30 77 8 70 Z" fill="#BFE3FA"/>
                  <text x="30" y="27" textAnchor="middle" fontSize="9" fontWeight="700" fill="#06427A" fontFamily="Arial">PURE</text>
                  <text x="30" y="56" textAnchor="middle" fontSize="8" fill="#0E7FC1" fontFamily="Arial">50cl</text>
                </svg>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="sec" id="prices">
        <div className="shead"><h2>Price board</h2><p>Prices move with the market. Call to confirm today&apos;s rate before sending your rider.</p></div>
        <div className="bwrap"><table className="board">
          <thead><tr><th>Product</th><th>Pack</th><th>Now</th><th>10+ packs</th><th>Note</th></tr></thead>
          <tbody>{PRICES.map((p) => (
            <tr key={p[0]}><td data-label="Product">{p[0]}</td><td data-label="Pack">{p[1]}</td><td data-label="Now" className="pr">{p[2]}</td><td data-label="10+ packs">{p[3]}</td><td data-label="Note" className="nt">{p[4]}</td></tr>
          ))}</tbody>
        </table></div>
        <div className="tiers"><h3>Weekly standing orders</h3><ul>{TIERS.map((t) => <li key={t[0]}><strong>{t[0]}</strong><span>{t[1]}</span></li>)}</ul></div>
      </section>
      <section className="sec alt" id="delivery">
        <div className="shead"><h2>Where the truck goes</h2><p>Fees are per drop, not per bag. Free delivery on any order above 100 bags.</p></div>
        <div className="areas">{AREAS.map((a) => <div className="area" key={a[0]}><strong>{a[0]}</strong><span>{a[1]} · min {a[2]}</span></div>)}</div>
      </section>
      <section className="sec" id="quality">
        <div className="shead"><h2>From borehole to your gate</h2><p>Four steps, done the same way every morning.</p></div>
        <div className="steps">{STEPS.map((s) => <div className="step" key={s[0]}><span className="n">{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
        <div className="account">
          <div>
            <h3>Shops, schools &amp; event centres</h3>
            <p>Set up a standing order and we hold stock for you every week.</p>
            <ul><li>Weekly invoicing after three months of steady orders</li><li>Transfer or cash on delivery</li><li>Custom labels for parties from 200 bags</li><li>Store cool and out of sun — we print batch dates</li></ul>
          </div>
          <a className="b-yellow" href="tel:08034127790">Open an account</a>
        </div>
      </section>
      <section className="sec alt" id="faq">
        <div className="shead"><h2>Questions we get at the counter</h2></div>
        <div className="faq">{FAQS.map((f) => <details key={f[0]}><summary>{f[0]}</summary><p>{f[1]}</p></details>)}</div>
      </section>
      <section className="contact" id="contact"><div>
        <h2>Order today</h2>
        <p>Shop 4, Coker Market Road, off Sale Street, Ikorodu, Lagos.</p>
        <p className="hours">Mon–Sat 7:00–18:00 · Sunday deliveries 10:00–16:00</p>
        <div className="acts"><a className="b-solid" href="tel:08034127790">0803 412 7790</a><a className="b-line light" href="#prices">Check minimums</a></div>
      </div></section>
      <footer className="foot"><span>© {new Date().getFullYear()} Clearflow Waters, Ikorodu.</span><span>Prices move with the market — call to confirm.</span><span>PED Forge template draft · batch-3</span></footer>
    </div>
  );
}