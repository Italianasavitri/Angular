import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <h2>
    Welcome {{nama}}!
  </h2>
  <button (click)="onClick()">Greet</button>
  {{greeting1}}
  <br>
  <br>
  <button (click)="onKlik($event)">Event</button>
  {{greeting2}}
  <br>
  <br>
  <button (click)="greeting3='Welcome Event Binding'">Event</button>
  {{greeting3}}
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  // untuk memberi nama
  public nama = "Event Binding";
  public greeting1 = "";
  public greeting2 = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
  	console.log('Welcome Event Binding')
  	this.greeting1 = 'Ini Label Event Binding'
  }

  onKlik(event){
  	console.log(event);
  	this.greeting2 = event.type;
  }

}
