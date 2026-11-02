import { Link } from 'react-router-dom';
import { money } from '../format';
import { useShop } from '../ShopContext';
import s from './ProductCard.module.css';

export default function ProductCard({ p }) {
  const { favs, toggleFav } = useShop();
  const isFav = !!favs[p.id];
  const url = `/produs/${p.id}`;

  return (
    <article className={s.card}>
      <Link to={url} className={s.media} aria-label={`Vezi detalii ${p.name}`}>
        <div className={`sw ${p.cls} ${s.swatch}`} />
      </Link>
      <div className={s.tags}>
        {p.tag && <span className={s.tag}>{p.tag}</span>}
        {!p.stock && <span className={s.out}>La comandă</span>}
      </div>
      <button type="button" className={s.fav} onClick={() => toggleFav(p.id)} aria-pressed={isFav} aria-label={`Adaugă ${p.name} la favorite`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
      </button>
      <div className={s.body}>
        <div className={s.brand}>{p.brand}</div>
        <Link to={url} className={s.name}>{p.name}</Link>
        <div className={s.spec}>{p.spec}</div>
        <div className={s.foot}>
          <div><span className={s.price}>{money(p.price)}</span><span className={s.unit}> / {p.unit}</span></div>
          <button type="button" className={s.add}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
            Adaugă
          </button>
        </div>
      </div>
    </article>
  );
}
