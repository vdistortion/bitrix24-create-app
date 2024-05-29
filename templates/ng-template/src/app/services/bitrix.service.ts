import { Injectable } from '@angular/core';
import { IBitrix24Library } from 'bitrix24-library';
import BitrixBatch from '../../api/bitrix';

@Injectable({
  providedIn: 'root',
})
export class BitrixService {
  public BX24: IBitrix24Library;
  public batch: any;

  init(BX24: IBitrix24Library) {
    this.BX24 = BX24;
    this.batch = new BitrixBatch(BX24);
  }
}
