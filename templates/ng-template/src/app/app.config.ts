import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BitrixService } from './services/bitrix.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), BitrixService],
};
