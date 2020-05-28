import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MartinComponent } from './pages/martin/martin.component';
import { AvrilComponent } from './pages/avril/avril.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MartinComponent,
    AvrilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
