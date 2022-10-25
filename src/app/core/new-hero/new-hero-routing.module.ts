//ANGULAR//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTES//
import { NewHeroComponent } from './new-hero.component';

const routes: Routes = [
  {
    path: '',
    component: NewHeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewHeroRoutingModule {}
