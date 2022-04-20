import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation :   ViewEncapsulation.None
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

    OnchangeFirst  (){

this.serverElements[0].name = 'Changed' ;

    }

    OnDestroyElement(){
this.serverElements.splice(0,1)


    }

  }

