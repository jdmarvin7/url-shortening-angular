import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
    ]
  },
  {
    path: 'details',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
