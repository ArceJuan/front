import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
