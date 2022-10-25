//ANGULAR//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTES//
import { TableComponent } from './core/table/table.component';
import { EditHeroeComponent } from './core/edit-heroe/edit-heroe.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TableComponent,
  },
  {
    path: 'newhero',
    loadChildren: () =>
      import('./core/new-hero/new-hero.module').then((m) => m.NewHeroModule),
  },
  {
    path: 'edithero/:id',
    component: EditHeroeComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
