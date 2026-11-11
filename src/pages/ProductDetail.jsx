import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { catUrl, money } from '../format';
import { getJson, toProduct, useShop } from '../ShopContext';
import s from './ProductDetail.module.css';

const messages = {
  loading: 'Se încarcă produsul…',
  missing: 'Produsul nu există.',
  error: 'Nu am putut încărca produsul. Încearcă din nou mai târziu.',
};

export default function ProductDetail() {
  const { id } = useParams();
  const { favs, toggleFav, finishes } = useShop();
  const [p, setP] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    getJson(`/api/products/${id}`)
      .then((data) => {
        if (!alive) return;
        setP(toProduct(data));
        setStatus('ready');
      })
      .catch((e) => alive && setStatus(e.message === '404' ? 'missing' : 'error'));
    return () => { alive = false; };
  }, [id]);

  if (status !== 'ready') {
    return (
      <main className={`container ${s.page}`}>
        <div className={s.empty} role="status">
          <div className={s.emptyTitle}>{messages[status]}</div>
          {status === 'missing' && <Link to="/" className={s.back}>← Înapoi la catalog</Link>}
        </div>
      </main>
    );
  }

  const isFav = !!favs[p.id];
  const finish = finishes.find((f) => f.id === p.finish);

  return (
    <main className={`container ${s.page}`}>
      <nav className={s.crumbs} aria-label="Navigare">
        <Link to="/">Catalog</Link>
        {p.category && <> / <Link to={catUrl(p.cat)}>{p.category.name}</Link></>}
        {' / '}<span aria-current="page">{p.name}</span>
      </nav>

      <div className={s.top}>
        <div className={s.media}>
          <div className={`sw ${p.cls} ${s.swatch}`} />
          <div className={s.tags}>
            {p.tag && <span className={s.tag}>{p.tag}</span>}
          </div>
        </div>

        <div className={s.info}>
          <div className={s.brand}>{p.brand}</div>
          <h1 className={s.name}>{p.name}</h1>
          {p.spec && <div className={s.spec}>{p.spec}</div>}

          <div>
            <span className={s.price}>{money(p.price)}</span>
            <span className={s.unit}> / {p.unit}</span>
          </div>

          <div className={p.stock ? s.inStock : s.out}>{p.stock ? 'În stoc' : 'La comandă'}</div>

          {p.description && <p className={s.desc}>{p.description}</p>}

          <dl className={s.facts}>
            {finish && <><dt>Finisaj</dt><dd><span className={`sw ${finish.cls} ${s.dot}`} />{finish.label}</dd></>}
            {p.coverage && <><dt>Acoperire</dt><dd>{p.coverage} mp / {p.unit}</dd></>}
            {p.sku && <><dt>Cod produs</dt><dd>{p.sku}</dd></>}
          </dl>

          <div className={s.actions}>
            <button type="button" className={s.add}>Adaugă în coș</button>
            <button type="button" className={s.fav} onClick={() => toggleFav(p.id)} aria-pressed={isFav}>
              {isFav ? '♥ Salvat la favorite' : '♡ Adaugă la favorite'}
            </button>
          </div>
        </div>
      </div>

      {p.specs?.length > 0 && (
        <section className={s.section}>
          <h2 className={s.h2}>Specificații</h2>
          <table className={s.table}>
            <tbody>
              {p.specs.map((sp) => (
                <tr key={sp.label}><th scope="row">{sp.label}</th><td>{sp.value}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {p.care && (
        <section className={s.section}>
          <h2 className={s.h2}>Montaj și întreținere</h2>
          <p className={s.desc}>{p.care}</p>
        </section>
      )}
    </main>
  );
}
