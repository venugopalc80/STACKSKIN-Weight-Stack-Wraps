import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Check, ChevronDown, Instagram, Menu, Upload, X, Zap } from "lucide-react";
import "./styles.css";

const designs = [
  { title:"Hulk", type:"Anime", tone:"GREEN", image:"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85" },
  { title:"Crimson Strike", type:"Premium", tone:"RED", image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85" },
  { title:"Neon Oni", type:"Custom", tone:"PURPLE", image:"https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=85" },
  { title:"Shadow Saiyan", type:"Anime", tone:"BLACK", image:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85" },
  { title:"Gold Edition", type:"Premium", tone:"GOLD", image:"https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85" },
  { title:"Demon Mode", type:"Custom", tone:"VIOLET", image:"https://images.unsplash.com/photo-1584467735871-6b756e50c0ce?auto=format&fit=crop&w=1200&q=85" },
];

const steps = [
  ["01","Pick a style","Anime, Premium or something completely custom."],
  ["02","Send measurements","Tell us the wrap height, length and number of plates."],
  ["03","We build your quote","We review the details, confirm fit and come back with your custom price."],
];

function App(){
  const [menuOpen,setMenuOpen]=React.useState(false);
  const [filter,setFilter]=React.useState("All");
  const [showOrder,setShowOrder]=React.useState(false);

  const filtered = filter==="All" ? designs : designs.filter(d=>d.type===filter);

  return <div className="app">
    <header className="nav">
      <a className="brand" href="#top">STACK<span>SKIN</span><small>WEIGHT STACK WRAPS</small></a>
      <nav className={menuOpen ? "navlinks open" : "navlinks"}>
        {["Designs","How it works","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase().replaceAll(" ","-")} onClick={()=>setMenuOpen(false)}>{x}</a>)}
        <button className="button button-small" onClick={()=>setShowOrder(true)}>Get a Custom Quote <ArrowRight size={15}/></button>
      </nav>
      <button className="iconbutton mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Zap size={14}/> CUSTOM WEIGHT STACK WRAPS</div>
          <h1>TURNING GYM MACHINES INTO <em>ART.</em></h1>
          <p>Custom wraps for weight stacks that make your machine look as good as the work you put in. Anime, premium and fully custom designs.</p>
          <div className="hero-actions">
            <button className="button" onClick={()=>setShowOrder(true)}>Get a Custom Wrap <ArrowRight size={18}/></button>
            <a className="button button-ghost" href="#designs">Explore Designs</a>
          </div>
          <div className="proof">
            <span><b>6.5K+</b> Instagram community</span>
            <span><b>100%</b> custom fit</span>
            <span><b>DM</b> to transform your gym</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-main">
            <div className="wrap-art art-green"></div>
            <div className="hero-label"><strong>HULK // CUSTOM</strong><span>Designed for your machine</span></div>
          </div>
          <div className="floating-card"><small>EVERY MACHINE</small><strong>DESERVES<br/><i>A STORY.</i></strong></div>
        </div>
      </section>

      <section className="marquee"><div>ANIME • PREMIUM • CUSTOM • MADE TO FIT • ANIME • PREMIUM • CUSTOM • MADE TO FIT •</div></section>

      <section className="section" id="designs">
        <div className="section-heading"><div><span className="kicker">THE COLLECTION</span><h2>Explore the designs.</h2></div><a href="#custom-order" className="text-link">See how custom works <ArrowRight size={17}/></a></div>
        <div className="filters">{["All","Anime","Premium","Custom"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div>
        <div className="grid">{filtered.map(d=><article className="design-card" key={d.title}>
          <div className="design-image" style={{backgroundImage:"linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.68)),url("+d.image+")"}}><span>{d.type}</span></div>
          <div className="design-meta"><div><h3>{d.title}</h3><small>{d.tone} EDITION</small></div><button className="round"><ArrowRight size={17}/></button></div>
        </article>)}</div>
      </section>

      <section className="section split" id="how-it-works">
        <div><span className="kicker">NO FIXED PRODUCTS. NO GUESSWORK.</span><h2>Your machine.<br/>Your measurements.<br/><em>Your wrap.</em></h2><p className="lead">STACKSKIN is built for custom orders. Tell us what you have, show us the machine and we’ll work out the right wrap for it.</p><button className="button" onClick={()=>setShowOrder(true)}>Start Custom Order <ArrowRight size={17}/></button></div>
        <div className="steps">{steps.map(([num,title,copy])=><div className="step" key={num}><div className="stepnum">{num}</div><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
      </section>

      <section className="quote-band">
        <div><span className="kicker">READY WHEN YOU ARE</span><h2>Make your machine<br/><em>stand out.</em></h2></div>
        <button className="button button-dark" onClick={()=>setShowOrder(true)}>Get your custom quote <ArrowRight size={18}/></button>
      </section>

      <section className="section about" id="about">
        <div className="about-image"><div className="about-stamp">STACK<br/>SKIN</div></div>
        <div><span className="kicker">WHY STACKSKIN</span><h2>Gym equipment, but make it <em>yours.</em></h2><p className="lead">We turn standard weight stacks into statement pieces. Whether you want an anime favourite, a premium look or an original idea, every wrap is created around your machine.</p><div className="ticks">{["Custom artwork","Made around your measurements","Built for a clean, premium finish"].map(x=><div key={x}><Check size={17}/>{x}</div>)}</div></div>
      </section>

      <section className="section contact" id="contact">
        <div><span className="kicker">LET'S TALK</span><h2>Have a machine<br/>in mind?</h2><p>Send your measurements and a few photos. We’ll take it from there.</p></div>
        <div className="contact-links"><button className="contact-row" onClick={()=>setShowOrder(true)}><span><b>Custom quote</b><small>Tell us about your machine</small></span><ArrowRight/></button><a className="contact-row" href="https://www.instagram.com/stack.skin" target="_blank" rel="noreferrer"><span><b>Instagram</b><small>@stack.skin</small></span><Instagram/></a></div>
      </section>
    </main>

    <footer><span>© 2026 STACKSKIN</span><span>Custom weight stack wraps.</span><a href="https://www.instagram.com/stack.skin" target="_blank" rel="noreferrer">Instagram ↗</a></footer>

    {showOrder && <OrderModal onClose={()=>setShowOrder(false)}/>}
  </div>
}

function OrderModal({onClose}){
  const [sent,setSent]=React.useState(false);
  const [file,setFile]=React.useState(null);
  const submit=e=>{e.preventDefault();setSent(true)};
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
    <div className="modal">
      <button className="modal-close iconbutton" onClick={onClose}><X/></button>
      {!sent ? <><div className="modal-head"><span className="kicker">CUSTOM ORDER</span><h2>Tell us about<br/><em>your machine.</em></h2><p>Send the details below. We’ll review everything and get back to you with a custom quote.</p></div>
      <div className="progress"><span className="on">1</span><i></i><span>2</span><i></i><span>3</span></div>
      <form onSubmit={submit} className="form">
        <label>What are you looking for?<select required><option value="">Select a style</option><option>Anime Wrap</option><option>Premium Wrap</option><option>Fully Custom Wrap</option></select></label>
        <div className="field-grid"><label>Number of plates<input type="number" min="1" placeholder="e.g. 12" required/></label><label>Wrap height (cm)<input type="number" placeholder="e.g. 60" required/></label><label>Wrap length (cm)<input type="number" placeholder="e.g. 90" required/></label><label>Stack width (cm)<input type="number" placeholder="e.g. 30"/></label></div>
        <label className="upload">Machine photos / design reference<input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]?.name||null)}/><div><Upload size={20}/><b>{file||"Upload photos"}</b><small>JPG or PNG</small></div></label>
        <div className="field-grid"><label>Name<input required placeholder="Your name"/></label><label>Instagram<input placeholder="@username"/></label><label>Email<input type="email" required placeholder="you@example.com"/></label><label>City<input placeholder="Mumbai"/></label></div>
        <label>Anything else? <textarea rows="3" placeholder="Colours, characters, references or anything we should know."/></label>
        <button className="button form-submit">Send Enquiry <ArrowRight size={18}/></button>
      </form></> : <div className="success"><div className="success-icon"><Check size={28}/></div><span className="kicker">ENQUIRY RECEIVED</span><h2>You’re on your way.</h2><p>We’ve got your details. STACKSKIN will review your requirements and come back with a custom quote.</p><button className="button" onClick={onClose}>Back to site</button></div>}
    </div>
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
