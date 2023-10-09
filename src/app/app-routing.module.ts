import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';  
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // The HeroDetailComponent is no longer displayed directly. It's now a routed component. You deleted the <app-hero-detail> element from the AppComponent template.
import { HeroesComponent } from './heroes/heroes.component'; // The HeroesComponent is no longer displayed directly. It's now a routed component. You deleted the <app-heroes> element from the AppComponent template.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // The default route redirects to the dashboard
]; // path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.
// This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like localhost:4200/heroes.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
