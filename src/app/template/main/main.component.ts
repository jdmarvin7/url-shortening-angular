import { MainService } from './main.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
      this.links.push(this.link)
      console.log(this.links);
      this.zerarCampos();
    });
  }

  zerarCampos() {
    return this.link = ''
  }

  copyBoardText(text: any) {
    navigator.clipboard.writeText(text);
  }

  texto = 'Copy';

  click() {
    this.copyBoardText(this.links[0].result.full_short_link)
    this.texto = 'Copied'
  }

  pegandoConteudo() {
    this.emitLink.emit({
      full_short_link: ''
    })
  }

}


