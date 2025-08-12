import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling, withEnabledBlockingInitialNavigation } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation()
    ),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ), provideAnimationsAsync()
  ]
}).catch((err) => console.error(err));
