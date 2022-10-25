//ANGULAR//
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//NGRX//
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAllHeroes,
  getAllHeroesSuccess,
  getAllHeroesError,
  deleteHeroe,
  deleteHeroeSuccess,
  deleteHeroeError,
  getHero,
  getHeroSuccess,
  getHeroError,
  setHeroData,
  setHeroDataSuccess,
  setHeroDataError,
} from './heroes.actions';
//RXJS//
import { from, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
//FIREBASE//
import { FirebaseService } from 'src/app/services/firebase.service';

@Injectable()
export class HerosEffects {
  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllHeroes, deleteHeroeSuccess, setHeroDataSuccess),
      switchMap(() =>
        from(this.firebaseService.getAllHeroes()).pipe(
          take(1),
          map((heroes) => getAllHeroesSuccess({ heroes })),
          catchError((error) => of(getAllHeroesError({ error })))
        )
      )
    )
  );

  getHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHero),
      switchMap(({ id }) =>
        from(this.firebaseService.getHeroData(id)).pipe(
          take(1),
          map((hero) => getHeroSuccess({ hero })),
          catchError((error) => of(getHeroError({ error })))
        )
      )
    )
  );

  setHeroeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setHeroData),
      switchMap(({ hero }) =>
        from(this.firebaseService.setHeroes(hero)).pipe(
          take(1),
          map(() => {
            this.router.navigate(['/dashboard']);
            return setHeroDataSuccess();
          }),
          catchError((error) => {
            return of(setHeroDataError({ error }));
          })
        )
      )
    )
  );

  deleteHeroe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHeroe),
      switchMap(({ id }) =>
        from(this.firebaseService.deleteHeroe(id)).pipe(
          take(1),
          map(() => deleteHeroeSuccess()),
          catchError((error) => of(deleteHeroeError({ error })))
        )
      )
    )
  );
};
