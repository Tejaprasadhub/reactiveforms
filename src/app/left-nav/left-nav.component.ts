import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  menu: any[] = [];
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
        displayName: 'Organization Chart',
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
        displayName: 'Position Tracker',
        iconName: 'group',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
      {
        displayName: 'Leaves',
        iconName: 'desktop_windows',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
      {
        displayName: 'Emergency Planning',
        iconName: 'group',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
      {
        displayName: 'Administation',
        iconName: 'desktop_windows',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
      {
        displayName: 'IAM',
        iconName: 'group',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
      {
        displayName: 'Seating Arrangement',
        iconName: 'group',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
      {
        displayName: 'Overtime Details',
        iconName: 'group',
        children: [
          {
            displayName: 'Sample3',
            iconName: 'search',
            route: 'sample3'
          }
        ]
      },
     
       {
        displayName: 'Tranig Manual',
        iconName: 'ballot',
        route: 'iam',
      },

    ];

  }

}
