import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './shared/body/body.component';
import { TableComponent } from './shared/table/table.component';
import { HomeComponent } from './shared/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { AgGridModule } from 'ag-grid-angular';
import { ResponsiveComponent } from './shared/responsive/responsive.component';
import { EdgeHeadersComponent } from './shared/edge-headers/edge-headers.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TableComponent,
    HomeComponent,
    ResponsiveComponent,
    EdgeHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
