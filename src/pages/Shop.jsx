import { Link, useSearchParams } from 'react-router-dom';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import { catUrl, finishes } from '../data/mock';
import { useShop } from '../ShopContext';
import s from './Shop.module.css';

const benefits = [
  { title: 'Livrare la șantier', text: '[ZONE ȘI TERMENE LIVRARE]', icon: <><path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></> },
  { title: 'Montaj Roxid Montaje', text: 'Echipă proprie, la cerere', icon: <><path d="M14.5 5.5l4 4L9 19H5v-4z" /><path d="M12.5 7.5l4 4" /></> },
  { title: 'Produse originale San Marco', text: 'Distribuitor autorizat', icon: <><path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6z" /><path d="M9 12l2 2 4-4" /></> },
  { title: 'Card, ramburs sau OP', text: 'Factură pe firmă sau persoană fizică', icon: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h3" /></> },
];

const steps = [
  { n: '01', title: 'Alegi materialele', text: 'Filtrezi după finisaj și categorie, salvezi la favorite.' },
  { n: '02', title: 'Calculezi necesarul', text: 'Introduci suprafața, iar noi îți spunem câte bucăți îți trebuie.' },
  { n: '03', title: 'Comanzi online', text: 'Plătești cu cardul, ramburs sau prin ordin de plată.' },
  { n: '04', title: 'Livrăm și montăm', text: 'La șantier, iar dacă vrei, cu echipa Roxid Montaje.' },
];

const projects = [
  { cls: 'sw-walnut', text: 'Perete living · riflaj nuc · [ORAȘ]' },
  { cls: 'sw-black', text: 'Sală ședințe · panouri acustice · [ORAȘ]' },
  { cls: 'sw-cadoro', text: 'Recepție · finisaj San Marco · [ORAȘ]' },
];

const sorters = {
  asc: (a, b) => (a.price || 1e9) - (b.price || 1e9),
  desc: (a, b) => (b.price || -1) - (a.price || -1),
  name: (a, b) => a.name.localeCompare(b.name, 'ro'),
};

const norm = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const { favs, products, categories, status } = useShop();
  const cat = params.get('cat') || 'toate';
  const q = (params.get('q') || '').trim();
  const finRaw = (params.get('fin') || '').split(',');
  const fin = finishes.map((f) => f.id).filter((id) => finRaw.includes(id));
  const stock = params.has('stoc');
  const fav = params.has('fav');
  const sort = params.get('sort') || 'rec';

  const set = (key, value) => {
    const p = new URLSearchParams(params);
    if (value) p.set(key, value);
    else p.delete(key);
    setParams(p);
  };
  const reset = () => setParams({});

  const query = norm(q);
  const filtered = products.filter((p) =>
    (cat === 'toate' || p.cat === cat) &&
    (!fin.length || fin.includes(p.finish)) &&
    (!stock || p.stock) &&
    (!fav || favs[p.id]) &&
    (!query || norm(`${p.name} ${p.brand} ${p.spec}`).includes(query)));
  const list = sorters[sort] ? [...filtered].sort(sorters[sort]) : filtered;

  const chips = [];
  if (q) chips.push({ label: `Căutare: „${q}”`, clear: () => set('q', '') });
  finishes.filter((f) => fin.includes(f.id)).forEach((f) =>
    chips.push({ label: f.label, clear: () => set('fin', fin.filter((x) => x !== f.id).join(',')) }));
  if (stock) chips.push({ label: 'În stoc', clear: () => set('stoc', '') });
  if (fav) chips.push({ label: 'Favorite', clear: () => set('fav', '') });

  const current = categories.find((c) => c.id === cat) || categories[0];
  const title = fav && cat === 'toate' ? 'Produsele tale favorite' : current.title;

  return (
    <main>
      <section className={s.hero}>
        <div className={`container ${s.heroInner}`}>
          <div className={s.heroText}>
            <span className={s.badge}>În colaborare cu San Marco</span>
            <h1>Riflaje și finisaje de interior, gata de montaj.</h1>
            <p>Panouri riflate, tencuieli decorative și vopsele San Marco, plus tot ce îți trebuie pentru montaj — comandate online, livrate la șantier.</p>
            <div className={s.actions}>
              <Link to={catUrl('riflaje')} className={s.btnGold}>Vezi riflajele</Link>
              <Link to={catUrl('sanmarco')} className={s.btnGhost}>Colecția San Marco</Link>
            </div>
          </div>
          <div className={s.heroArt}>
            <div className={`sw hero-panel ${s.tall}`} />
            <div className="sw sw-black" />
            <div className="sw sw-marmo" />
            <div className={`sw sw-cadoro ${s.wide}`} />
          </div>
        </div>
      </section>

      <section className={s.benefits}>
        <div className={`container ${s.benefitsRow}`}>
          {benefits.map((b) => (
            <div key={b.title} className={s.benefit}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{b.icon}</svg>
              <div>
                <div className={s.benefitTitle}>{b.title}</div>
                <div className={s.benefitText}>{b.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${s.catalog}`}>
        <Filters cat={cat} fin={fin} stock={stock} fav={fav} set={set} reset={reset} />
        <div className={s.results}>
          <div className={s.toolbar}>
            <div>
              <div className={s.eyebrow}>Catalog</div>
              <h2 className={`${s.h2} ${s.tight} ${s.under}`}>{title}</h2>
            </div>
            <div className={s.sort}>
              <span aria-live="polite">{list.length} {list.length === 1 ? 'produs' : 'produse'}</span>
              <label htmlFor="sortare">Sortează</label>
              <select id="sortare" value={sort} onChange={(e) => set('sort', e.target.value === 'rec' ? '' : e.target.value)}>
                <option value="rec">Recomandate</option>
                <option value="asc">Preț crescător</option>
                <option value="desc">Preț descrescător</option>
                <option value="name">Nume A–Z</option>
              </select>
            </div>
          </div>

          {chips.length > 0 && (
            <div className={s.chips}>
              {chips.map((c) => (
                <button key={c.label} type="button" className={s.chip} onClick={c.clear} aria-label={`Elimină filtrul ${c.label}`}>
                  {c.label} <span aria-hidden="true">×</span>
                </button>
              ))}
            </div>
          )}

          {status === 'loading' && (
            <div className={s.empty} role="status">
              <div className={s.emptyTitle}>Se încarcă produsele…</div>
            </div>
          )}

          {status === 'error' && (
            <div className={s.empty} role="status">
              <div className={s.emptyTitle}>Nu am putut încărca produsele. Încearcă din nou mai târziu.</div>
            </div>
          )}

          {status === 'ready' && list.length === 0 && (
            <div className={s.empty}>
              <div className={s.emptyTitle}>Niciun produs nu se potrivește filtrelor.</div>
              <button type="button" className={s.btnDarkSm} onClick={reset}>Resetează filtrele</button>
            </div>
          )}

          <div className={s.grid}>
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className={s.band}>
        <div className={`container ${s.stepsInner}`}>
          <h2 className={s.h2}>De la idee la perete, în 4 pași</h2>
          <div className={s.stepsGrid}>
            {steps.map((st) => (
              <div key={st.n} className={s.step}>
                <span className={s.stepNo}>{st.n}</span>
                <strong>{st.title}</strong>
                <span className={s.stepText}>{st.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sanmarco}>
        <div className={`container ${s.smInner}`}>
          <div className={`sw sw-marmo ${s.smArt}`} />
          <div className={s.smText}>
            <div className={s.eyebrow}>Roxideal × San Marco</div>
            <h2 className={`${s.h2} ${s.tight}`}>Finisaje decorative italiene, alese împreună cu tine.</h2>
            <p>Tencuieli decorative și vopsele de interior San Marco, cu recomandări de nuanță și consum calculate pentru suprafața ta.</p>
            <div className={s.actions}>
              <Link to={catUrl('sanmarco')} className={s.btnDark}>Vezi produsele San Marco</Link>
              <a href="#consultanta" className={s.btnOutline}>Cere consultanță</a>
            </div>
          </div>
        </div>
      </section>

      <section id="proiecte" className={`container ${s.projects}`}>
        <div className={s.toolbar}>
          <div>
            <div className={s.eyebrow}>Montate de Roxid Montaje</div>
            <h2 className={`${s.h2} ${s.under}`}>Proiecte realizate</h2>
          </div>
          <a href="#proiecte-toate" className={s.more}>Vezi toate proiectele →</a>
        </div>
        <div className={s.projectsGrid}>
          {projects.map((pr) => (
            <figure key={pr.cls} className={s.project}>
              <div className={`sw ${pr.cls}`} />
              <figcaption>
                <strong>[NUME PROIECT]</strong><br />
                <span>{pr.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
