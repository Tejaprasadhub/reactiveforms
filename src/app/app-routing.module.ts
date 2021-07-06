import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IamComponent } from './iam/iam.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';

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
