import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { QueueComponent } from './views/queue/queue.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Menu',
    component:MenuComponent
  },
  {
    path:'Queue',
    component:QueueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
