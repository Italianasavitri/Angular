import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-references-variable',
  template: `
  	<h2>Welcome {{nama}}!</h2>
  	<input #myInput type="text">
  	<button (click)="logMessage(myInput.value)">Log</button>
  `,
  styleUrls: []
})
export class TemplateReferencesVariableComponent implements OnInit {

  // untuk memberi nama
  public nama = "Template References Variable";

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
  	console.log(value);
  }

}
