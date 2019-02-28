import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  // Memberi warna pada sebuah text/header
  template: `
  <h2>
    Welcome {{nama}}!
  </h2>
  <h2 class="text-success">Class Binding</h2>
  <h2 [class]="classSuccess">Class Binding</h2>

  <h2 class="text-special" [class]="classSuccess">Class Binding</h2>
  <h2 [class.text-danger]="isError">Class Binding</h2>

  <h2 [ngClass]="messageClasses">Class Binding</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class ClassbindingComponent implements OnInit {

  // untuk memberi nama
  public nama = "Class Binding";
  // untuk class binding namanya sesuaikan dengan style css yang sudah dibuat
  public classSuccess = "text-success";
  // bikin untuk error
  public isError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.isError,
    "text-danger": this.isError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
