import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPost]'
})
export class PostDirective {

  constructor( private el:ElementRef) { 
    console.log(this.el) 
    this.el.nativeElement.style.display="flex" 
    this.el.nativeElement.style.fontSize="large"
   

    

    

   
   

  }


  ngOninit(){

  }
}
