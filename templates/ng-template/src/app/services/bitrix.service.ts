import { Injectable } from '@angular/core';
import BitrixBatch from '../../api/bitrix';

@Injectable({
  providedIn: 'root',
})
export class BitrixService {
  public BX24: any = null;
  public batch: any = null;

  init(BX24: any) {
    this.BX24 = BX24;
    this.batch = new BitrixBatch(BX24);
  }
}
