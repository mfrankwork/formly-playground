import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { routes } from './app.routes';
import { Repeat1TypeComponent } from './repeat1';
import { Repeat2TypeComponent } from './repeat2';
import { RepeatTypeComponent } from './repeat-section.type';

export const formProviders = importProvidersFrom([
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormlyModule.forRoot({
    types: [
      { name: 'repeat1', component: Repeat1TypeComponent },
      { name: 'repeat2', component: Repeat2TypeComponent },
      { name: 'repeat', component: RepeatTypeComponent },
    ],
  }),
  FormlyMaterialModule,
]);

export const provideForms = () => {
  return formProviders;
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideForms()],
};
