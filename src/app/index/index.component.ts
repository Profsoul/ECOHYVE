import { Component, OnInit ,AfterViewInit,ElementRef,ViewChild, Renderer2} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { startWith, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit , OnInit {
  @ViewChild(MatSidenav) titleRef!:MatSidenav;

  title = 'ECOHYVE';
  mobile_view=false
  

  constructor(private oberserver : BreakpointObserver,private renderer:Renderer2) {
   
   }
   ngAfterViewInit(): void {

     this.oberserver.observe(['(max-width:800px)']).subscribe((res)=>{
       if (res.matches){
             
         this.titleRef.mode = 'over';
         this.titleRef.close() 
         this.mobile_view = true} 
       else{
          
         this.titleRef.mode='side';
         this.titleRef.open();
         this.mobile_view = false


       }
     });
    }
   

    Width(value: any){
    if( value != 'none'){
      this.title = value;
      this.oberserver.observe(['(max-width:800px)']).subscribe((res)=>{
        if (res.matches){
       this.titleRef.close()
    
    }
  });
  }
  }

  
  
  
  ngOnInit(): void {
      }

}
