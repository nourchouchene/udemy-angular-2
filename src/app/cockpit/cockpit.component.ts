import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() ServerCreation =  new EventEmitter<{eventName:string , eventcontent: string}> () ;
  //customizing name of event with alias
  @Output('BpServer') BluePrintServerCreation =  new EventEmitter<{eventName:string , eventcontent: string}> () ;

  // BluePrintServerCreation
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(InputServerName) {
    this.ServerCreation.emit({
      eventName : InputServerName.value,
      eventcontent : this.newServerContent

    });
  }
  
  onAddBlueprint(InputServerName) {
    this.BluePrintServerCreation.emit({
      eventName : InputServerName.value ,
      eventcontent : this.newServerContent
    });
  }
}
