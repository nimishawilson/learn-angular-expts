import { Component } from '@angular/core';
import {  trigger, state, style } from '@angular/animations';

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
      }))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    }
}
