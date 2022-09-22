import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public activo:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMnu():void{
    this.activo = !this.activo
  }

}
