import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[img-preloader]',
  host: {
    '[attr.src]': 'finalImage'
  }
})
export class ImagePreloaderDirective implements OnInit {

  @Input() targetSource: string;
  @Input() defaultImage : string = 'assets/preloader.gif';

  downloadingImage : any;
  finalImage: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(){

    this.finalImage = this.defaultImage;
    this.downloadingImage = new Image(100,100); 

    this.downloadingImage.onload = () => {
      console.log('image downloaded');
      this.finalImage = this.targetSource;
    }

    this.downloadingImage.src = this.targetSource;


  }

}
