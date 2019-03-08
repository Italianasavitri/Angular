import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
  	<h2>Welcome {{nama}}!</h2>
  	<h2 [style.color]="'orange'">Style Binding</h2>
  	<h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  	<h2 [style.color]="highlightcolor">Style Binding 2</h2>
  	<h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: []
})
export class StylebindingComponent implements OnInit {

  // untuk memberi nama
  public nama = "Style Binding";

  public hasError = false;
  public isSpecial = true;
  public highlightcolor = "orange";
  public titleStyles = {
  	color : "blue",
  	fontStyle : "italic"
  }

  constructor() { }

  ngOnInit() {
  }

}
