import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  // disini kita melihat perbedaan antara value of property dan attribute
  // Membuat format penulisannya juga
  // disabled = untuk 'read only'
  // jadi, binding adalah untuk mengambil value dari suatu variable
  template: `
  <h2>
    Welcome {{nama}}!
  </h2>
  <input [id]="myId" type="text" value="Binding"> 
  <input id="{{myId}}" type="text" value="Binding"> 
  <input [disabled]="true" id="{{myId}}" type="text" value="Binding"> 
  <input [disabled]="false" id="{{myId}}" type="text" value="Binding"> 
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Binding"> 
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Binding"> 
`,
  styles: []
})
export class PropertybindingComponent implements OnInit {

  // untuk memberi nama
  public nama = "Property Binding";
  // membuat id
  public myId = "testId";
  // membuat variable disabled
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}
