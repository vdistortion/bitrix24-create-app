import BitrixBatch from './batchList';

let BX24: any = null;
let batch: any = null;

export function bx24init(Bx24: any) {
  if (!Bx24) return;
  BX24 = Bx24;
  batch = new BitrixBatch(Bx24);
}

export { BX24, batch };
