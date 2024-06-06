import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { InscriptionComponent } from './modules/general/inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent,
  },
  {
    path:'inscription',
    component:InscriptionComponent,
  },
  
  {
    path : 'navbar',
    component:NavbarComponent,
  },
  {
    path : 'footer',
    component:FooterComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
