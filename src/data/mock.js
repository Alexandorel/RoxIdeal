const care = 'Panourile se aclimatizează 48 h în încăpere înainte de montaj. Se lipesc cu adeziv polimeric sau se prind pe șipci, cu profile de finisaj la capete. Se curăță cu o lavetă umedă, fără solvenți.';
const careSM = 'Suportul trebuie să fie curat, uscat și amorsat cu grundul recomandat. Aplicarea se face conform fișei tehnice San Marco. Pentru efecte decorative recomandăm aplicatori specializați — echipa Roxid Montaje te poate ajuta.';

export const categories = [
  { id: 'toate', label: 'Toate produsele', title: 'Toate produsele' },
  { id: 'riflaje', label: 'Riflaje', title: 'Riflaje și panouri decorative' },
  { id: 'sanmarco', label: 'San Marco', title: 'Finisaje San Marco' },
  { id: 'accesorii', label: 'Profile și accesorii', title: 'Profile și accesorii de montaj' },
];

export const catUrl = (id) => (id === 'toate' ? '/' : `/?cat=${id}`);

export const finishes = [
  { id: 'lemn', label: 'Lemn', cls: 'sw-oak' },
  { id: 'negru', label: 'Negru', cls: 'sw-black' },
  { id: 'alb', label: 'Alb', cls: 'sw-white' },
  { id: 'gri', label: 'Gri', cls: 'sw-grey' },
  { id: 'decorativ', label: 'Decorativ', cls: 'sw-cadoro' },
];

export const products = [
  { id: 'p1', sku: 'RX-R101', cat: 'riflaje', finish: 'lemn', stock: true, tag: '', cov: 0.354, brand: 'Riflaje', name: 'Panou riflat WPC — Stejar natur', spec: '2900 × 122 × 12 mm', unit: 'buc', price: 89, cls: 'sw-oak', care,
    desc: 'Panou riflat din compozit lemn-polimer, rezistent la umiditate. Se montează cu adeziv sau pe profile, pe perete sau tavan.',
    specs: [{ k: 'Dimensiuni', v: '2900 × 122 × 12 mm' }, { k: 'Material', v: 'WPC' }, { k: 'Finisaj', v: 'Stejar natur' }, { k: 'Acoperire / buc', v: '0,354 m²' }] },
  { id: 'p2', sku: 'RX-R102', cat: 'riflaje', finish: 'lemn', stock: true, tag: '', cov: 0.336, brand: 'Riflaje', name: 'Panou riflat MDF — Nuc închis', spec: '2800 × 120 × 12 mm', unit: 'buc', price: 79, cls: 'sw-walnut', care,
    desc: 'Panou riflat din MDF cu folie decorativă nuc, pentru pereți de accent în living și dormitor.',
    specs: [{ k: 'Dimensiuni', v: '2800 × 120 × 12 mm' }, { k: 'Material', v: 'MDF foliat' }, { k: 'Finisaj', v: 'Nuc închis' }, { k: 'Acoperire / buc', v: '0,336 m²' }] },
  { id: 'p3', sku: 'RX-A201', cat: 'riflaje', finish: 'negru', stock: true, tag: 'Acustic', cov: 1.44, brand: 'Riflaje acustice', name: 'Panou riflat acustic — Negru grafit', spec: '2400 × 600 mm, fetru 9 mm', unit: 'buc', price: 349, cls: 'sw-black', care,
    desc: 'Lamele pe suport de fetru fonoabsorbant. Reduce ecoul în birouri, săli de ședință și living-uri deschise.',
    specs: [{ k: 'Dimensiuni', v: '2400 × 600 mm' }, { k: 'Suport', v: 'Fetru PET 9 mm' }, { k: 'Finisaj', v: 'Negru grafit' }, { k: 'Clasă absorbție', v: '[CLASĂ]' }] },
  { id: 'p10', sku: 'RX-A202', cat: 'riflaje', finish: 'lemn', stock: false, tag: 'Acustic', cov: 1.44, brand: 'Riflaje acustice', name: 'Panou riflat acustic — Stejar', spec: '2400 × 600 mm, fetru 9 mm', unit: 'buc', price: 349, cls: 'sw-oakfelt', care,
    desc: 'Lamele cu finisaj stejar pe fetru negru. Combină căldura lemnului cu performanța acustică.',
    specs: [{ k: 'Dimensiuni', v: '2400 × 600 mm' }, { k: 'Suport', v: 'Fetru PET 9 mm' }, { k: 'Finisaj', v: 'Stejar' }, { k: 'Clasă absorbție', v: '[CLASĂ]' }] },
  { id: 'p4', sku: 'RX-R103', cat: 'riflaje', finish: 'alb', stock: true, tag: '', cov: 0.354, brand: 'Riflaje', name: 'Panou riflat WPC — Alb mat', spec: '2900 × 122 × 12 mm', unit: 'buc', price: 89, cls: 'sw-white', care,
    desc: 'Panou riflat alb mat, ușor de vopsit în nuanța dorită. Potrivit pentru spații luminoase și minimaliste.',
    specs: [{ k: 'Dimensiuni', v: '2900 × 122 × 12 mm' }, { k: 'Material', v: 'WPC' }, { k: 'Finisaj', v: 'Alb mat' }, { k: 'Acoperire / buc', v: '0,354 m²' }] },
  { id: 'p11', sku: 'RX-R104', cat: 'riflaje', finish: 'gri', stock: true, tag: 'Nou', cov: 0.354, brand: 'Riflaje', name: 'Panou riflat WPC — Gri antracit', spec: '2900 × 122 × 12 mm', unit: 'buc', price: 89, cls: 'sw-grey', care,
    desc: 'Nuanță de gri închis, potrivită pentru birouri, recepții și interioare industriale.',
    specs: [{ k: 'Dimensiuni', v: '2900 × 122 × 12 mm' }, { k: 'Material', v: 'WPC' }, { k: 'Finisaj', v: 'Gri antracit' }, { k: 'Acoperire / buc', v: '0,354 m²' }] },
  { id: 'p5', sku: 'SM-D301', cat: 'sanmarco', finish: 'decorativ', stock: true, tag: 'San Marco', cov: 0, brand: 'San Marco', name: 'Marmorino — tencuială decorativă', spec: 'Efect stuc venețian', unit: 'găleată', price: 0, cls: 'sw-marmo', care: careSM,
    desc: 'Tencuială decorativă pe bază de var cu efect de piatră lustruită, pentru pereți interiori.',
    specs: [{ k: 'Ambalare', v: '[KG / GĂLEATĂ]' }, { k: 'Consum', v: '[KG / MP]' }, { k: 'Aplicare', v: 'Gletieră inox' }, { k: 'Nuanțe', v: 'Paletar San Marco' }] },
  { id: 'p6', sku: 'SM-D302', cat: 'sanmarco', finish: 'decorativ', stock: true, tag: 'San Marco', cov: 0, brand: 'San Marco', name: 'Cadoro — finisaj decorativ catifelat', spec: 'Efect metalizat', unit: 'găleată', price: 0, cls: 'sw-cadoro', care: careSM,
    desc: 'Finisaj decorativ cu reflexii metalizate și textură catifelată, pentru pereți de accent.',
    specs: [{ k: 'Ambalare', v: '[L / GĂLEATĂ]' }, { k: 'Consum', v: '[L / MP]' }, { k: 'Aplicare', v: 'Pensulă / gletieră' }, { k: 'Nuanțe', v: 'Paletar San Marco' }] },
  { id: 'p7', sku: 'SM-V303', cat: 'sanmarco', finish: 'alb', stock: true, tag: '', cov: 0, brand: 'San Marco', name: 'Vopsea lavabilă de interior', spec: 'Mată, colorabilă', unit: 'găleată', price: 0, cls: 'sw-paint', care: careSM,
    desc: 'Vopsea lavabilă pentru pereți și tavane interioare, colorabilă în nuanțele paletarului San Marco.',
    specs: [{ k: 'Ambalare', v: '[L / GĂLEATĂ]' }, { k: 'Randament', v: '[MP / L]' }, { k: 'Aspect', v: 'Mat' }, { k: 'Nuanțe', v: 'Paletar San Marco' }] },
  { id: 'p12', sku: 'SM-G304', cat: 'sanmarco', finish: 'alb', stock: true, tag: '', cov: 0, brand: 'San Marco', name: 'Grund de amorsare pentru interior', spec: 'Pregătire suport', unit: 'găleată', price: 0, cls: 'sw-primer', care: careSM,
    desc: 'Grund care uniformizează absorbția suportului înainte de vopsele și tencuieli decorative.',
    specs: [{ k: 'Ambalare', v: '[L / GĂLEATĂ]' }, { k: 'Randament', v: '[MP / L]' }, { k: 'Diluare', v: 'Conform fișei tehnice' }, { k: 'Interior', v: 'Da' }] },
  { id: 'p8', sku: 'RX-P401', cat: 'accesorii', finish: 'negru', stock: true, tag: '', cov: 0, brand: 'Accesorii', name: 'Profil de finisaj aluminiu — Negru', spec: 'L 2700 mm', unit: 'buc', price: 45, cls: 'sw-profile', care,
    desc: 'Profil de capăt și colț pentru marginile panourilor riflate. Aluminiu vopsit în câmp electrostatic.',
    specs: [{ k: 'Lungime', v: '2700 mm' }, { k: 'Material', v: 'Aluminiu' }, { k: 'Culoare', v: 'Negru mat' }, { k: 'Compatibil', v: 'Riflaje 12 mm' }] },
  { id: 'p9', sku: 'RX-P402', cat: 'accesorii', finish: 'alb', stock: true, tag: '', cov: 0, brand: 'Accesorii', name: 'Adeziv de montaj pentru riflaje', spec: 'Cartuș 290 ml', unit: 'buc', price: 32, cls: 'sw-glue', care,
    desc: 'Adeziv polimeric pentru lipirea panourilor riflate pe gips-carton, beton sau lemn.',
    specs: [{ k: 'Volum', v: '290 ml' }, { k: 'Tip', v: 'Polimer MS' }, { k: 'Consum orientativ', v: '[BUC / MP]' }, { k: 'Interior', v: 'Da' }] },
  { id: 'p13', sku: 'RX-P403', cat: 'accesorii', finish: 'gri', stock: true, tag: '', cov: 0, brand: 'Accesorii', name: 'Clipsuri de montaj ascuns', spec: 'Set [NR] buc', unit: 'set', price: 0, cls: 'sw-clips', care,
    desc: 'Clipsuri pentru prinderea mecanică a panourilor pe șipci, fără șuruburi vizibile.',
    specs: [{ k: 'Conținut', v: '[NR] buc' }, { k: 'Material', v: 'Oțel zincat' }, { k: 'Compatibil', v: 'Riflaje WPC' }, { k: 'Interior', v: 'Da' }] },
];
