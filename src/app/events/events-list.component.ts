import { Component, OnInit } from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'



@Component({

    selector: 'events-list',
    templateUrl: './events-list.component.html'
   
})

export class EventsListComponent implements OnInit {

    events :any[] 

    constructor(private  eventService : EventService, private toasterService:ToastrService){
        
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }

    // handleEvent(data){
    //     alert("Received event name  "+data);
    // }

    handleClick(data){
        this.toasterService.success(data);
    }
}