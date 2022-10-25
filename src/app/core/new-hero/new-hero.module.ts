//ANGULAR//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//COMPONENTES//
import { NewHeroComponent } from './new-hero.component';
//MODULO DE RUTAS//
import { NewHeroRoutingModule } from './new-hero-routing.module';
//MODULO DE MATERIAL//
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [NewHeroComponent],
  imports: [
    CommonModule,
    NewHeroRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class NewHeroModule {}
