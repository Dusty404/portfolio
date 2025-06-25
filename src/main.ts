import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';

const scrollConfig = {
  scrollPositionRestoration: 'top' as const,
  anchorScrolling: 'enabled' as const
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling(scrollConfig)
    ),
  ]
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
