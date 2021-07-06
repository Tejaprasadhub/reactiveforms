import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
menu:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        displayName: 'Escritorio',
        iconName: 'desktop_windows',
        route: 'escritorio',
      },        
      {
        displayName: 'Entradas GADE',
        iconName: 'ballot',
        route: 'entradasGADE',
      },
      {
        displayName: 'Expedientes',
        iconName: 'description',          
        children: [
          {
            displayName: 'Mis Expedientes',
            iconName: 'how_to_reg',
            route: '/misexpedientes'
          },
          { 
            displayName: 'Todos',
            iconName: 'waves',
            route: '/todos'
          }
        ]
      },
      {
        displayName: 'Perfiles',
        iconName: 'group',
        children: [
            {
              displayName: 'Búsqueda Perfil',
              iconName: 'search',
              route: '/busquedaperfiles'
            }
          ]
        }
    ];

  }

}
