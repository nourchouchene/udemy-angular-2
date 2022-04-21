import { Component,
   OnInit ,
   Input,
    OnChanges,
     SimpleChanges,
     DoCheck,
     AfterContentInit,
     AfterContentChecked,
     AfterViewInit,
     AfterViewChecked,
     OnDestroy,
     ElementRef,
     ContentChild,
     ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges , DoCheck ,AfterContentInit ,
 AfterContentChecked ,
  AfterViewInit ,
  AfterViewChecked,
  OnDestroy{
@Input('ServeurElement') element : { type:string , name :string , content:string}
@Input() name : string ;  
@ContentChild('Content' , {static:true} ) Content : ElementRef
@ViewChild('heading' , {static:true})   Heading : ElementRef ;
constructor() { 
    console.log('Constructor called')
  }

  ngOnInit(): void {
    console.log('Ngonit called called')
    console.log( 'HeadingContent :' + this.Heading.nativeElement.textContent)
    console.log('Content is : ' + this.Content.nativeElement.textContent)
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log('NgOn changes called')
    console.log(changes)

  }

  ngDoCheck(){

    console.log("NgDoCheck called !")
  }


  ngAfterContentInit(): void {
    console.log("Aftercontentinit called !")

  }

  ngAfterContentChecked(): void {
    
    console.log("AftercontentChecked called !")

  }

  ngAfterViewInit(): void {
    
    console.log("AfterViewinit called !")
    console.log( 'HeadingContent :' + this.Heading.nativeElement.textContent)
    console.log('Content is : ' + this.Content.nativeElement.textContent)

  }

  ngAfterViewChecked(): void {
    
    console.log("AfterViewChecked called !")


  }
  ngOnDestroy(): void {
    console.log("Destroy called !")
  }
  
}
