import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {thumbnaiComponent} from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    thumbnaiComponent,
    NavBarComponent
  ],
  providers:[EventService,
    ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
