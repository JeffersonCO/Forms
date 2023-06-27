import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { FormdetailComponent } from './formcomponent/formdetail/formdetail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:"form",
    component:FormcomponentComponent
  },
  {
    path:"form/:id",
    component:FormdetailComponent
  },
  {
    path:"**",
    redirectTo:"form"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
@NgModule({
  imports: [
    CommonModule
  ],
  
})
export class FirtComponentComponent { }