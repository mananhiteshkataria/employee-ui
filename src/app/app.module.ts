import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { UpdateComponent } from './update/update.component';
import { FindAllComponent } from './find-all/find-all.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    UpdateComponent,
    FindAllComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
