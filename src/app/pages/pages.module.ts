import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ExitoComponent } from './exito/exito.component';
import { InicioComponent } from './inicio/inicio.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from "../material/material.module";
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    NosotrosComponent,
    EcomerceComponent,
    ContactoComponent,
    ExitoComponent,
    InicioComponent,
    NavbarComponent,
    ServiciosComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
