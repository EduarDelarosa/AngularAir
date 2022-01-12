import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    //Antes y durante el render - before render
    //Cambios en inputs
    console.log('OnChanges');
  }

}
