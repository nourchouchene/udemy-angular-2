import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type  :'server' , name: 'servertest' , content : 'test' }];

  onServerCreation(eventData: { eventName:string , eventcontent: string}) {
    this.serverElements.push({
      type: 'server',
      name: eventData.eventName,
      content: eventData.eventcontent
    });
  }
  
  onBluePrintServerCreation (BlueeventData: { eventName:string , eventcontent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: BlueeventData.eventName,
      content: BlueeventData.eventcontent
    });
  }
}
