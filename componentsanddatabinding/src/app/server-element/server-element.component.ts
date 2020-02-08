import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
   @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string;

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
     console.log('ngOnInit called');
  }

 ngDoCheck(){
    console.log('ngDoCheck called');
 }

 ngAfterContentInit(){
   console.log('ngAftercontntInit called');
 }

 ngAfterContentChecked(){
   console.log('ngaftercontentChecked called');
 }

 ngAfterViewInit(){
  console.log('ngafterviewinit');
 }

 ngAfterViewChecked(){
   console.log('ngafterviewchecked');
 }

 ngOnDestroy(){
   console.log('ngOnDestroy');
 }

}
