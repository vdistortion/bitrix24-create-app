import type { IBitrix24Library } from 'bitrix24-library';
import BitrixBatch from './batchList';

let BX24: IBitrix24Library | undefined;
let batch: any = null;

export function bx24init(Bx24: IBitrix24Library) {
  if (!Bx24) return;
  BX24 = Bx24;
  batch = new BitrixBatch(Bx24);
}

export { BX24, batch };
