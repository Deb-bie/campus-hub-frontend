import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideIcons } from '@ng-icons/core'
import { heroBell, heroCalendarDays, heroClock, heroMapPin, heroUser, heroUserGroup, heroXMark } from '@ng-icons/heroicons/outline'


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideIcons({heroBell, heroUser, heroMapPin, heroCalendarDays, heroClock, heroUserGroup, heroXMark })
  ]
};
