import { inject } from 'vue';
import type { IBitrix24Library } from 'bitrix24-library';
import BitrixBatch from './batchList.ts';

export function useBitrix24() {
  const BX24 = inject<IBitrix24Library>('$BX24')!;
  const batch = new BitrixBatch(BX24);

  function openLink(url: string, inNewTab = false) {
    const openLinkInNewTab = (href: string) => {
      const anchor = document.createElement('a');
      anchor.href = ['https://', BX24.getDomain(), href].join('');
      anchor.target = '_blank';
      anchor.click();
    };

    if (inNewTab) openLinkInNewTab(url);
    else if (BX24.isMobile()) openLinkInNewTab(url);
    else BX24.openPathAsync(url).catch(() => openLinkInNewTab(url));
  }

  return { BX24, batch, openLink };
}
