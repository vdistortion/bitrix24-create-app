import { Injectable } from '@angular/core';
import type { IBitrix24Library } from 'bitrix24-library';
import BitrixBatch from '../../api/bitrix';

@Injectable({
  providedIn: 'root',
})
export class BitrixService {
  private BX24!: IBitrix24Library;
  public batch: any;

  init(BX24: IBitrix24Library) {
    this.BX24 = BX24;
    this.batch = new BitrixBatch(BX24);
  }

  get(): IBitrix24Library {
    return this.BX24;
  }

  openLink(url: string, inNewTab = false) {
    const openLinkInNewTab = (href: string) => {
      const anchor = document.createElement('a');
      anchor.href = ['https://', this.BX24.getDomain(), href].join('');
      anchor.target = '_blank';
      anchor.click();
    };

    if (inNewTab) openLinkInNewTab(url);
    else if (this.BX24.isMobile()) openLinkInNewTab(url);
    else this.BX24.openPathAsync(url).catch(() => openLinkInNewTab(url));
  }
}
