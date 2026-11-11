export const catUrl = (id) => (id === 'toate' ? '/' : `/?cat=${id}`);

export const finishes = [
  { id: 'lemn', label: 'Lemn', cls: 'sw-oak' },
  { id: 'negru', label: 'Negru', cls: 'sw-black' },
  { id: 'alb', label: 'Alb', cls: 'sw-white' },
  { id: 'gri', label: 'Gri', cls: 'sw-grey' },
  { id: 'decorativ', label: 'Decorativ', cls: 'sw-cadoro' },
];
