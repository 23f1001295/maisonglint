'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gallery, product } from '../content/product';
export function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a className="brand" href="#main" aria-label="Maison Glint home">MAISON GLINT</a><nav aria-label="Main navigation"><a href="#the-plate">The plate</a><a href="#the-finish">The finish</a><a href="#at-the-table">At the table</a></nav><a className="header-cta" href="#the-plate">Explore Object 01 <span aria-hidden="true">↗</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[['The plate','#the-plate'],['The finish','#the-finish'],['Dimensions','#dimensions'],['At the table','#at-the-table']].map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}<span aria-hidden="true">↗</span></a>)}</nav>}</header>;
}
export function Gallery() {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(()=>{ const d=dialog.current; if(!d)return; const restore=()=>{document.body.style.overflow='';trigger.current?.focus();};d.addEventListener('close',restore); return ()=>{d.removeEventListener('close',restore);document.body.style.overflow='';};},[]);
  function open(){dialog.current?.showModal();document.body.style.overflow='hidden';}
  function close(){dialog.current?.close();}
  return <div className="gallery"><button ref={trigger} className="gallery-main" onClick={open} aria-label={`Enlarge image: ${gallery[index].label}`}><Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="(max-width:760px) 100vw, 66vw"/><span className="zoom-label">View full image <span aria-hidden="true">＋</span></span></button><div className="gallery-bottom"><div className="thumbnails" role="group" aria-label="Product images">{gallery.map((item,i)=><button key={item.src} aria-label={`Show ${item.label.toLowerCase()}`} aria-pressed={index===i} onClick={()=>setIndex(i)}><Image src={item.src} alt="" fill sizes="72px" /></button>)}</div><p aria-live="polite">0{index+1} <span>/ 03</span></p></div><dialog ref={dialog} className="lightbox" aria-label="Product image gallery" onClick={e=>{if(e.target===e.currentTarget)close();}} onKeyDown={e=>{if(e.key==='ArrowRight')setIndex((index+1)%gallery.length);if(e.key==='ArrowLeft')setIndex((index+gallery.length-1)%gallery.length);}}><button className="close-lightbox" onClick={close} autoFocus>Close ×</button><div className="lightbox-image"><Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="100vw"/></div><div className="lightbox-controls"><button aria-label="Previous image" onClick={()=>setIndex((index+gallery.length-1)%gallery.length)}>←</button><p>{gallery[index].label} · 0{index+1} / 03</p><button aria-label="Next image" onClick={()=>setIndex((index+1)%gallery.length)}>→</button></div><p className="lightbox-disclosure">AI-generated concept imagery</p></dialog></div>;
}
export function Dimensions(){
 const [unit,setUnit]=useState<'cm'|'in'>('cm');
 const format=(mm:number|null)=>mm===null?'To be confirmed':`${(mm/(unit==='cm'?10:25.4)).toFixed(1)} ${unit}`;
 return <><div className="unit-row"><span>Dimensions</span><div className="units" role="group" aria-label="Measurement unit"><button aria-pressed={unit==='cm'} onClick={()=>setUnit('cm')}>CM</button><button aria-pressed={unit==='in'} onClick={()=>setUnit('in')}>IN</button></div></div><dl className="specs" aria-live="polite"><div><dt>Diameter</dt><dd>{format(product.diameterMm)}</dd></div><div><dt>Height</dt><dd>{format(product.heightMm)}</dd></div><div><dt>Weight</dt><dd>{product.weightGrams===null?'To be confirmed':`${product.weightGrams} g`}</dd></div><div><dt>Material</dt><dd>{product.material}</dd></div><div><dt>Finish</dt><dd>{product.finish}</dd></div></dl></>;
}
