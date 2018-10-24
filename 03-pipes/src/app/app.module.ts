import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
registerLocaleData(localeEs);

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, CapitalizePipe ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
