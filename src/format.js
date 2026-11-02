export const money = (n) =>
  n ? n.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' lei' : '[PREȚ]';
