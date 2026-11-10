import { finishes } from '../data/mock';
import { useShop } from '../ShopContext';
import s from './Filters.module.css';

export default function Filters({ cat, fin, stock, fav, set, reset }) {
  const { products, categories } = useShop();
  const count = (id) => (id === 'toate' ? products.length : products.filter((p) => p.cat === id).length);
  const toggleFin = (id) => set('fin', (fin.includes(id) ? fin.filter((x) => x !== id) : [...fin, id]).join(','));

  return (
    <aside aria-label="Filtre" className={s.panel}>
      <div className={s.head}>
        <h2>Filtre</h2>
        <button type="button" className={s.reset} onClick={reset}>Resetează</button>
      </div>
      <div className={`${s.group} ${s.cats}`}>
        <div className={s.label}>Categorie</div>
        {categories.map((c) => (
          <button key={c.id} type="button" className={s.cat} aria-pressed={cat === c.id} onClick={() => set('cat', c.id === 'toate' ? '' : c.id)}>
            <span>{c.label}</span>
            <span className={s.count}>{count(c.id)}</span>
          </button>
        ))}
      </div>
      <div className={s.group}>
        <div className={s.label}>Finisaj</div>
        <div className={s.chips}>
          {finishes.map((f) => (
            <button key={f.id} type="button" className={s.chip} aria-pressed={fin.includes(f.id)} onClick={() => toggleFin(f.id)}>
              <span className={`sw ${f.cls} ${s.dot}`} />
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className={s.group}>
        <div className={s.label}>Disponibilitate</div>
        <label className={s.check}>
          <input type="checkbox" checked={stock} onChange={() => set('stoc', stock ? '' : '1')} />
          Doar produse în stoc
        </label>
        <label className={s.check}>
          <input type="checkbox" checked={fav} onChange={() => set('fav', fav ? '' : '1')} />
          Doar favorite
        </label>
      </div>
      <div className={s.promo}>
        <div className={s.promoTitle}>Nu știi cât îți trebuie?</div>
        <div className={s.promoText}>Pe pagina fiecărui riflaj ai un calculator de necesar după suprafață.</div>
      </div>
    </aside>
  );
}
