import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling /*, withHashLocation*/, /* withEnabledBlockingInitialNavigation */ } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const scrollConfig = {
  scrollPositionRestoration: 'top' as const,   // immer oben starten
  anchorScrolling: 'enabled' as const          // Anker (Fragmente) erlauben
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      // withHashLocation(),  // ← entfernen
      withInMemoryScrolling(scrollConfig)
    ),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
      })
    ),
    provideAnimationsAsync()
  ]
}).catch((err) => console.error(err));