import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    CinepolisComponent,
    ResistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
