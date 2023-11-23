import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {
  constructor( private el:ElementRef) { 
    console.log(this.el)
    
    this.el.nativeElement.style.backgroundColor="coral" 
    this.el.nativeElement.style.width="50%" 
    this.el.nativeElement.style.margin="10px" 

    
  }


  ngOninit(){

  }

 

}
