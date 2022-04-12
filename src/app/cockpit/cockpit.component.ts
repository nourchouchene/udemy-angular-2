import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() ServerCreation =  new EventEmitter<{eventName:string , eventcontent: string}> () ;
  @Output() BluePrintServerCreation =  new EventEmitter<{eventName:string , eventcontent: string}> () ;

  // BluePrintServerCreation
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.ServerCreation.emit({
      eventName : this.newServerName,
      eventcontent : this.newServerContent

    });
  }
  
  onAddBlueprint() {
    this.BluePrintServerCreation.emit({
      eventName : this.newServerName,
      eventcontent : this.newServerContent
    });
  }
}
