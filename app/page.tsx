import Image from 'next/image';
import { Gallery, Dimensions, Navigation } from './product-experience';
import { product } from '../content/product';
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="announcement">INTRODUCING MAISON GLINT <span>—</span> THE FIRST CHAPTER</div>
    <Navigation />
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/images/hero.webp" alt="Concept photograph of a polished stainless steel plate catching a sweep of light" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow">OBJECTS FOR THE EVERYDAY RITUAL</p><h1 id="hero-title">A quieter kind<br />of <em>brilliance.</em></h1><p>Stainless steel. A new reflection.</p><a className="light-link" href="#the-plate">Discover the plate <span aria-hidden="true">↗</span></a></div>
        <div className="hero-bottom"><span>MODERNIST CHROMEWARE</span><span>01 / THE GLINT PLATE</span></div>
      </section>
      <section className="intro"><p className="eyebrow">THE FIRST OBJECT</p><h2>One plate. Endless possibilities.</h2><p>A simple form, a reflective surface, a different way to set the table.</p></section>
      <section id="the-plate" className="product-section" aria-labelledby="product-title">
        <Gallery />
        <div className="product-copy"><p className="eyebrow">MAISON GLINT / OBJECT 01</p><h2 id="product-title">{product.name}</h2><p className="product-subtitle">{product.material} · {product.finish}</p><div className="small-rule" /><p>A considered canvas for whatever you bring to the table. Clean lines and a luminous finish make the everyday feel a little less ordinary.</p><div className="finish"><span className="silver-swatch" aria-hidden="true" /> <span>Polished silver</span></div><a className="text-link" href="#dimensions">Explore the dimensions <span aria-hidden="true">↗</span></a><div className="availability"><span className="eyebrow">THE FIRST RELEASE</span><p>Coming soon</p><span>Price and availability will be announced at launch.</span></div><details><summary>Product details<span aria-hidden="true">+</span></summary><p>A circular stainless steel plate with a mirror-polished finish. Final steel grade, dimensions and weight will be published after sample verification.</p></details><details><summary>Care & use<span aria-hidden="true">+</span></summary><p>Care guidance and dishwasher suitability will be confirmed for the final product before orders open.</p></details><details><summary>Delivery & returns<span aria-hidden="true">+</span></summary><p>Our first release is planned for the United States and United Kingdom. Delivery estimates, shipping costs and return terms will be available before purchase.</p></details></div>
      </section>
      <section id="the-finish" className="material" aria-labelledby="material-title"><Image src="/images/macro.webp" alt="Concept macro view of the mirror-polished rim and its curved reflection" fill sizes="100vw" /><div className="material-shade"/><div className="material-copy"><p className="eyebrow">A STUDY IN REFLECTION</p><h2 id="material-title">Made of steel.<br /><em>Alive with light.</em></h2><p>A curve. A glint. The room, reflected.<br />A surface that becomes part of the setting.</p></div><span className="image-index">02 / THE FINISH</span></section>
      <section id="dimensions" className="dimensions-section" aria-labelledby="dimensions-title"><div className="dimension-image"><Image src="/images/hero.webp" alt="Illustrative view of the plate's circular form; final measurements pending" fill sizes="(max-width: 760px) 100vw, 66vw" /><div className="dimension-caption"><span>CIRCULAR FORM</span><span>ILLUSTRATIVE VIEW</span></div></div><div className="dimension-copy"><p className="eyebrow">FORM & PROPORTION</p><h2 id="dimensions-title">Every detail,<br /><em>considered.</em></h2><Dimensions /><p className="fineprint">Final measurements will be confirmed with our first production sample.</p></div></section>
      <section id="at-the-table" className="table-scene" aria-labelledby="table-title"><Image src="/images/dining.webp" alt="Concept dining scene with a polished steel plate, cherries and white linen" fill sizes="100vw"/><div className="table-copy"><p className="eyebrow">THE ART OF THE EVERYDAY</p><h2 id="table-title">Set a different table.</h2><a className="text-link" href="#the-plate">Meet your new centrepiece <span aria-hidden="true">↗</span></a></div><span className="image-index">03 / AT THE TABLE</span></section>
      <div className="preview-note">Collection preview. Imagery is AI-generated to illustrate the design direction; the final product may differ.</div>
    </main>
    <footer><div className="footer-top"><a className="footer-brand" href="#main" aria-label="Maison Glint, back to top">MAISON GLINT</a><p>MODERNIST CHROMEWARE</p><a className="text-link" href="#the-plate">Discover the first object <span aria-hidden="true">↑</span></a></div><div className="footer-bottom"><span>© 2026 MAISON GLINT</span><span>THE EVERYDAY, REFLECTED.</span><a href="#main">Back to top ↑</a></div></footer>
  </>;
}
