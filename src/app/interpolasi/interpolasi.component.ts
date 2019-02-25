import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolasi',
  template: `
    <h2>
      Welcome {{name}}!
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"2+2"}}</h2>
    <h2>{{"Wecome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{fungsibaru()}}</h2>
    <h2>{{setUrl}}</h2>
  `,
  styles: []
})
export class InterpolasiComponent implements OnInit {

  // untuk memberi nama
  public name = "Interpolasi";
  // untuk atur URL untuk alamat ini
  public setUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  fungsibaru(){
    return "Ini fungsi dari " + this.name; // membuat fungsi baru dan dipanggil di template
  }
}
