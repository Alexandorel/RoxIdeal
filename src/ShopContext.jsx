import { createContext, useContext, useEffect, useState } from 'react';

const ShopContext = createContext(null);

const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
};

const all = { id: 'toate', label: 'Toate produsele', title: 'Toate produsele' };
const toCategory = (c) => ({ id: c.slug, label: c.name, title: c.title });
const toFinish = (f) => ({ id: f.slug, label: f.name, cls: f.swatch });
const toProduct = (p) => ({ ...p, cat: p.category?.slug, finish: p.finish?.slug, stock: p.stock > 0, cls: p.swatch, unit: p.unit?.toLowerCase() });
const byId = (a, b) => a.id - b.id;

const getJson = (url) => fetch(url).then((r) => {
  if (!r.ok) throw new Error(r.status);
  return r.json();
});

export function ShopProvider({ children }) {
  const [favs, setFavs] = useState(() => load('favs'));
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([all]);
  const [finishes, setFinishes] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    Promise.all([getJson('/api/products'), getJson('/api/categories'), getJson('/api/finishes')])
      .then(([ps, cs, fs]) => {
        setProducts(ps.sort(byId).map(toProduct));
        setCategories([all, ...cs.sort(byId).map(toCategory)]);
        setFinishes(fs.sort(byId).map(toFinish));
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const toggleFav = (id) => setFavs((f) => {
    const next = { ...f };
    if (next[id]) delete next[id];
    else next[id] = true;
    return next;
  });

  return (
    <ShopContext.Provider value={{ favs, toggleFav, products, categories, finishes, status }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
