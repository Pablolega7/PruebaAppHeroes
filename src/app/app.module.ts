import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MODULO DE RUUTAS//
import { AppRoutingModule } from './app-routing.module';
//FIREBASE//
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
//COMPONENTS//
import { TableComponent } from './core/table/table.component';
import { EditHeroeComponent } from './core/edit-heroe/edit-heroe.component';
import { AppComponent } from './app.component';
//MODULO ANGULAR MATERIAL//
import { MaterialModule } from './material.module';
//NGRX//
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from './main.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HerosEffects } from './store/heroesState/heroes.effects';

@NgModule({
  declarations: [AppComponent, TableComponent, EditHeroeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot(MAIN_REDUCER),
    EffectsModule.forRoot([HerosEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
