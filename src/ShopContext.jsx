import { createContext, useContext, useEffect, useState } from 'react';

const ShopContext = createContext(null);

const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
};

export function ShopProvider({ children }) {
  const [favs, setFavs] = useState(() => load('favs'));

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  const toggleFav = (id) => setFavs((f) => {
    const next = { ...f };
    if (next[id]) delete next[id];
    else next[id] = true;
    return next;
  });

  return <ShopContext.Provider value={{ favs, toggleFav }}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
