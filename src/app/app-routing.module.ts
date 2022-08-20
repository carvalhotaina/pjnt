import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path : "", 
    pathMatch : "full",
    redirectTo : "login"
  }
  ,
  {
    path : "login", component : LoginComponent
  },
  {
    path : "carousel" , component : CarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
