import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesState } from './heroes.state';

export const selectHeroesState =
  createFeatureSelector<HeroesState>('heroesState');

export const selectHeroes = createSelector(
  selectHeroesState,
  (state: HeroesState) => state.heroes
);
export const selectHero = createSelector(
  selectHeroesState,
  (state: HeroesState) => state.heroEdit
);

export const selectSearch = createSelector(
  selectHeroesState,
  (state: HeroesState) => state.search
);

export const selectLoading = createSelector(
  selectHeroesState,
  (state: HeroesState) => state.loading
);
