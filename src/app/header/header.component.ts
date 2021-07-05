import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarVisible:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(){
    if(this.sidebarVisible){
      document.getElementsByTagName('body')[0].classList.add('sidebar-collapse')
    }else{
      document.getElementsByTagName('body')[0].classList.remove('sidebar-collapse')
    }
    this.sidebarVisible = !this.sidebarVisible;
  }

}
