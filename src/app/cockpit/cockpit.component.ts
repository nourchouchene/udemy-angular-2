import { Component, OnInit, EventEmitter, Output , ViewChild, ElementRef } from '@angular/core';

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
  // newServerName = '';
  // newServerContent = '';

  // using ViewChild decorator to bind a local reference attribute from template to a typescript attribute
  @ViewChild('ServerInputContent' , {static:true}) ServerInputContent : ElementRef; 
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(InputServerName) {
    this.ServerCreation.emit({
      eventName : InputServerName.value,
      eventcontent : this.ServerInputContent.nativeElement.value

    });
  }
  
  onAddBlueprint(InputServerName) {
    // this.ServerInputContent.nativeElement.value= 'yes' ;
    this.BluePrintServerCreation.emit({
      eventName : InputServerName.value ,
      eventcontent : this.ServerInputContent.nativeElement.value
    });
  }
}
