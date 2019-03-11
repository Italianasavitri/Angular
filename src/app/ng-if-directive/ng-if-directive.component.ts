import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  template: `
  	<h2 *ngIf="true">Wecome ng If Directive</h2>
  	<h2 *ngIf="false">Wecome ng If Directive</h2>
  	<h2 *ngIf="displayname">Welcome ng If Directive</h2>
  	
  	<h2 *ngIf="displayname; else elseBlock">
  		Welcome ng If Directive
  	</h2>

  	<ng-template #elseBlock>
  		<h2>Name is hidden</h2>
  	</ng-template>
  `,
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  displayname = true;

  constructor() { }

  ngOnInit() {
  }

}
