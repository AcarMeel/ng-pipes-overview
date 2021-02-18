import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { SellsModule } from './sells/sells.module';

const appModules = [
  SellsModule,
  SharedModule
];

// Change the Locale date time
import localEs from '@angular/common/locales/es-CR';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...appModules
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
