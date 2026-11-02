import { Link } from 'react-router-dom';
import { categories, catUrl } from '../data/mock';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>
        <div className={`${s.col} ${s.about}`}>
          <div className={s.logo}>ROXIDEAL</div>
          <div>Magazinul online al Roxid Montaje SRL, din 2022.</div>
          <form className={s.news}>
            <label htmlFor="news" className="sr">Email pentru newsletter</label>
            <input id="news" type="email" placeholder="Email pentru oferte" />
            <button type="button">Abonează-te</button>
          </form>
        </div>
        <div className={s.col}>
          <div className={s.heading}>Magazin</div>
          {categories.slice(1).map((c) => <Link key={c.id} to={catUrl(c.id)}>{c.label}</Link>)}
        </div>
        <div className={s.col}>
          <div className={s.heading}>Ajutor</div>
          <a href="#livrare">Livrare și retur</a>
          <a href="#montaj">Servicii de montaj</a>
          <a href="#termeni">Termeni și condiții</a>
          <a href="#anpc">ANPC · SOL</a>
        </div>
        <div id="contact" className={s.col}>
          <div className={s.heading}>Contact</div>
          <div>[TELEFON]</div>
          <div>[EMAIL]</div>
          <div>[ADRESĂ SHOWROOM]</div>
          <div>[PROGRAM]</div>
        </div>
      </div>
      <div className={`container ${s.legal}`}>© 2026 Roxid Montaje SRL · [CUI] · [NR. REG. COM.]</div>
    </footer>
  );
}
