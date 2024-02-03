import BitrixBatch from './batchList';

let BX24 = null;
let batch = null;

export function bx24init(Bx24) {
  if (!Bx24) return;
  BX24 = Bx24;
  batch = new BitrixBatch(Bx24);
}

export { BX24, batch };
