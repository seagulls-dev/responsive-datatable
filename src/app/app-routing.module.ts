import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainsComponent } from './mains/mains.component';

const routes: Routes = [
  {
    path: '',
    component: MainsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
