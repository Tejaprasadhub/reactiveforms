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
        displayName: 'Home',
        iconName: 'desktop_windows',
        route: 'home',
      },        
      {
        displayName: 'IAM',
        iconName: 'ballot',
        route: 'iam',
      },
      {
        displayName: 'Expedientes',
        iconName: 'description',          
        children: [
          {
            displayName: 'Sample1',
            iconName: 'how_to_reg',
            route: 'sample1'
          },
          { 
            displayName: 'Sample2',
            iconName: 'waves',
            route: 'sample2'
          }
        ]
      },
      {
        displayName: 'Perfiles',
        iconName: 'group',
        children: [
            {
              displayName: 'Sample3',
              iconName: 'search',
              route: 'sample3'
            }
          ]
        }
    ];

  }

}
