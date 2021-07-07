import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IamComponent } from './iam/iam.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';

const routes: Routes = [
  {
    path: 'home', 
    component: SampleComponentComponent, 
    pathMatch: 'full'
  },
  {
    path: 'iam', 
    component: IamComponent, 
    pathMatch: 'full'
  },
  {
    path: 'sample1', 
    component: Sample1Component, 
    pathMatch: 'full'
  },
  {
    path: 'sample2', 
    component: Sample2Component, 
    pathMatch: 'full'
  },
  {
    path: 'sample3', 
    component: Sample3Component, 
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
