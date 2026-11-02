import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { categories, catUrl } from '../data/mock';
import { useShop } from '../ShopContext';
import logo from '../assets/logo.jpg';
import s from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { favs } = useShop();
  const cat = params.get('cat') || 'toate';
  const favCount = Object.keys(favs).length;
  const cartCount = 0;

  const toShop = (p, replace) => navigate({ pathname: '/', search: p.toString() }, { replace });
  const onSearch = (e) => {
    const p = new URLSearchParams(params);
    if (e.target.value) p.set('q', e.target.value);
    else p.delete('q');
    toShop(p, pathname === '/');
  };

  return (
    <>
      <div className={s.topbar}>Partener oficial San Marco · Livrare gratuită peste [PRAG] lei · Montaj prin Roxid Montaje</div>
      <header className={s.header}>
        <div className={`container ${s.bar}`}>
          <Link to="/" className={s.brand} aria-label="Roxideal — pagina principală">
            <img src={logo} alt="" />
            <span>Roxideal</span>
          </Link>
          <form role="search" className={s.search} onSubmit={(e) => { e.preventDefault(); toShop(params, false); }}>
            <label htmlFor="cauta" className="sr">Caută produse</label>
            <input id="cauta" type="search" value={params.get('q') || ''} onChange={onSearch} placeholder="Caută riflaje, vopsele, profile…" />
            <button type="submit" aria-label="Caută">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
            </button>
          </form>
          <div className={s.actions}>
            <a href="#cont" className={s.account}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
              Contul meu
            </a>
            <Link to="/?fav=1" className={s.favs} aria-label={`Favorite, ${favCount} produse`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
              Favorite ({favCount})
            </Link>
            <button type="button" className={s.cart} aria-label={`Coșul de cumpărături, ${cartCount} produse`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" /><circle cx="9.5" cy="20" r="1.3" /><circle cx="17.5" cy="20" r="1.3" /></svg>
              Coș
              <span className={s.badge}>{cartCount}</span>
            </button>
          </div>
        </div>
        <nav aria-label="Categorii" className={s.nav}>
          <div className={`container ${s.navRow}`}>
            {categories.map((c) => (
              <Link key={c.id} to={catUrl(c.id)} className={s.navLink} aria-current={pathname === '/' && cat === c.id ? 'page' : undefined}>
                {c.label}
              </Link>
            ))}
            <a href="#proiecte" className={`${s.navLink} ${s.extra} ${s.push}`}>Proiecte realizate</a>
            <a href="#contact" className={`${s.navLink} ${s.extra}`}>Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
}
