import { Component } from '@angular/core';

@Component({
  selector: 'top-header', //Components  as html tag 
  // selector: '[top-header]', //Components  as html attribute
  // selector: '.top-header', //Components  as css class
  // selector: '#top-header', //Components  as css class
  standalone: true,
  imports: [],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css',
})
export class TopHeaderComponent {}
