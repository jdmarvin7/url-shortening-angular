import { MessageModule } from './../components/message/message.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CardModelComponent } from './card-model/card-model.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from './main/link/link.component';

@NgModule({
  declarations: [
    TemplateComponent,
    NavbarComponent,
    MainComponent,
    CardModelComponent,
    FooterComponent,
    LinkComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    MessageModule
  ],
  exports: [
    NavbarComponent,
    TemplateComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
