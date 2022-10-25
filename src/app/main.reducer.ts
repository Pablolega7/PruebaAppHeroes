import { ActionReducerMap } from '@ngrx/store';
import { HeroesStateReducer } from './store/heroesState/heroes.reducer';
import { HeroesState } from './store/heroesState/heroes.state';

export interface MainState {
  heroesState: HeroesState;
}

export const MAIN_REDUCER: ActionReducerMap<MainState> = {
  heroesState: HeroesStateReducer,
};
