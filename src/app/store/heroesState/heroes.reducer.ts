import { createReducer, on } from '@ngrx/store';
import { initialState, HeroesState } from './heroes.state';
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
  loading,
} from './heroes.actions';

export const HeroesStateReducer = createReducer(
  initialState,

  //GET HEROES//
  on(getAllHeroes, (state: HeroesState) => ({
    ...state,
    loading: true,
  })),

  on(getAllHeroesSuccess, (state: HeroesState, { heroes }) => ({
    ...state,
    loading: false,
    heroes,
  })),

  on(getAllHeroesError, (state: HeroesState, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //GET HERO//
  on(getHero, (state: HeroesState, { id }) => ({
    ...state,
    loading: true,
  })),

  on(getHeroSuccess, (state: HeroesState, { hero }) => ({
    ...state,
    loading: false,
    heroEdit: hero,
  })),

  on(getHeroError, (state: HeroesState, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //SET HEROE DATA//
  on(setHeroData, (state: HeroesState, { hero }) => ({
    ...state,
    loading: true,
  })),

  on(setHeroDataSuccess, (state: HeroesState) => ({
    ...state,
    loading: false,
  })),

  on(setHeroDataError, (state: HeroesState, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //DELETE HEROE//
  on(deleteHeroe, (state: HeroesState, { id }) => ({
    ...state,
    loading: true,
  })),
  on(deleteHeroeSuccess, (state: HeroesState) => ({
    ...state,
    loading: false,
  })),

  on(deleteHeroeError, (state: HeroesState, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(loading, (state: HeroesState) => ({
    ...state,
    loading: true,
  }))
);
