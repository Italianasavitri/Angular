import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-new-component', // selector cara 1
  //selector: '.app-new-component', // selector cara 2
  selector: '[app-new-component]', // selector cara 3
  //templateUrl: './new-component.component.html', // cara 1: menunjukkan alamat component.html
  template: `<div>
                Ini template secara langsung
            </div>`, // cara 2: langsung setting template .html disini
  //styleUrls: ['./new-component.component.css'] // cara 1: menunjukkan alamat style.css
  styles: [`
    div{
      color:red;
    }
  `] // cara 2 : langsung setting .css disini
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
