import { Component } from '@angular/core';
import {  trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)',
        'height': '100px',
        'width': '100px'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)',
        'height': '100px',
        'width': '100px'
      })),
      transition('normal <=> highlighted', animate(300))
      //  transition('highlighted => normal', animate(800))
    ]),
     trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)',
        'height': '100px',
        'width': '100px'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)',
        'height': '100px',
        'width': '100px'
      })),
        state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0px) scale(0.5)',
        'height': '100px',
        'width': '100px'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', animate(500))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }
    
    onShrink(){
      this.wildState = 'shrunken';
    }
}
