import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
    .pad-left {margin-left:10px;}
    .well div { color : orange;}
    .thumbnail {min-height:210px}
    .green {color:#003300 !important;}
    .bold {font-weight:bold;}
    `] 

})

export class thumbnaiComponent{

    prop:string = 'mani';

@Input() event:any
@Output()  eventClick = new EventEmitter()
handleMe(){

    this.eventClick.emit(this.event.name);
 }

 logfoo(){
     console.log('foo');
 }

 getStartTime(){
     const isEarlyStart = this.event && this.event.time === '8:00 am'
     return {green: isEarlyStart, bold:isEarlyStart}
 }
}