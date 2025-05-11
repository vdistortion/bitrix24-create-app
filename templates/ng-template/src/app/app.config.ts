import {
  ApplicationConfig,
  EnvironmentInjector,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
  runInInjectionContext,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Bitrix24 } from 'bitrix24-library';
import { BitrixService } from './services/bitrix/bitrix.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(async () => {
      const envInjector = inject(EnvironmentInjector);
      await runInInjectionContext(envInjector, async () => {
        const BX24 = await Bitrix24();
        const bx24Service = envInjector.get(BitrixService);
        bx24Service.init(BX24);
      });
    }),
  ],
};
