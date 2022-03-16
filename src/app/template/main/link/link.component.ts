import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  link: any;
  links: any[] =[];

  @Output() emitLink = new EventEmitter<any>();

  constructor(private service: MainService) { }

  ngOnInit(): void {
  }

  pegandoLink(): void {
    const value = this.service.pegar(this.link);
    value.subscribe((link: any) => {
      this.link = link;
      console.log(this.links);
      this.zerarCampos();
    });
  }

  aoClicar() {
    this.emitLink.emit(({
      link: this.link.result.short_link,
      fullLink: this.link.resul.full_short_link
    }))
  }

  zerarCampos() {
    return this.link = ''
  }

  texto = 'Copy';

  click() {
    this.texto = 'Copied!'
  }

}
