import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './shared/body/body.component';
import { TableComponent } from './shared/table/table.component';
import { ResponsiveComponent } from './shared/responsive/responsive.component';
import { EdgeHeadersComponent } from './shared/edge-headers/edge-headers.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'table', component: TableComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'edge', component: EdgeHeadersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
