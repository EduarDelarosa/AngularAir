import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('asMain') main!: ElementRef;
  @ViewChild('asBrowser') browser!: ElementRef;
  @ViewChild('asCenterText') centerText!: ElementRef;
  @ViewChild('asDisabled') disabled!: ElementRef;
  @ViewChild('asColorSvg') colorTxt!: ElementRef;
  @ViewChild('asSvg') svg!: ElementRef;
  @ViewChild('asLogo') logo!: ElementRef;
  @ViewChild('asActived') actived!: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
  }

  ngOnChanges(){
    //Antes y durante el render - before render
    //Cambios en inputs
    console.log('OnChanges');
  }


  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){

    //console.log("window scroll: ",  $event);
    //console.log(window.scrollY);
    if(window.scrollY >0){
      const asMain = this.main.nativeElement;
      const asBrowser = this.browser.nativeElement;
      const asCenterText = this.centerText.nativeElement;
      const asDisabled = this.disabled.nativeElement;
      const asColorTxt = this.colorTxt.nativeElement;
      const asSvg = this.svg.nativeElement;
      const asLogo = this.logo.nativeElement;
      const asAcived = this.actived.nativeElement;
      //console.log(asMain);
      this.renderer2.addClass(asMain, 'responsive');
      this.renderer2.addClass(asBrowser, 'ontop');
      this.renderer2.addClass(asCenterText, 'disabled');
      this.renderer2.addClass(asDisabled, 'disabled');
      this.renderer2.setStyle(asColorTxt,'color', '#000');
      this.renderer2.setStyle(asSvg,'color', '#000');
      this.renderer2.setStyle(asLogo,'fill', '#000');
      this.renderer2.addClass(asAcived, 'active');
    }else{
      const asMain = this.main.nativeElement;
      const asBrowser = this.browser.nativeElement;
      const asCenterText = this.centerText.nativeElement;
      const asDisabled = this.disabled.nativeElement;
      const asColorTxt = this.colorTxt.nativeElement;
      const asSvg = this.svg.nativeElement;
      const asLogo = this.logo.nativeElement;

      this.renderer2.removeClass(asMain, 'responsive');
      this.renderer2.removeClass(asBrowser, 'ontop');
      this.renderer2.removeClass(asCenterText, 'disabled');
      this.renderer2.removeClass(asDisabled, 'disabled');
      this.renderer2.setStyle(asColorTxt,'color', '#fff')
      this.renderer2.setStyle(asSvg,'color', '#fff');
      this.renderer2.setStyle(asLogo,'fill', '#fff');
    }
  }

  Change(): void {
  }

}
