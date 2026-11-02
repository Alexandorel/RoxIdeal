export const categories = [
  { id: 'toate', label: 'Toate produsele', title: 'Toate produsele' },
  { id: 'riflaje', label: 'Riflaje', title: 'Riflaje și panouri decorative' },
  { id: 'sanmarco', label: 'San Marco', title: 'Finisaje San Marco' },
  { id: 'accesorii', label: 'Profile și accesorii', title: 'Profile și accesorii de montaj' },
];

export const catUrl = (id) => (id === 'toate' ? '/' : `/?cat=${id}`);
