import { createAction, props } from '@ngrx/store';
import { HeroesModel } from '../../models/heroes.models';

export enum Types {
  GET_ALL_HEROES = '[Heroes State] Get All Heroes',
  GET_ALL_HEROES_SUCCESS = '[Heroes State] Get All Heroes: Success',
  GET_ALL_HEROES_ERROR = '[Heroes State] Set All Heroes: Error',

  GET_HERO = '[Heroes State] Get Hero',
  GET_HERO_SUCCESS = '[Heroes State] Get Hero: Success',
  GET_HERO_ERROR = '[Heroes State] Set Hero: Error',

  SET_HEROES_DATA = '[Heroes State] Set Heroes',
  SET_HEROES_DATA_SUCCESS = '[Heroes State] Set Heroes: Success',
  SET_HEROES_DATA_ERROR = '[Heroes State] Set Heroes: Error',

  DELETE_HEROE = '[Heroes State] Delete Heroes',
  DELETE_HEROE_SUCCESS = '[Heroes State] Delete Heroes: Success',
  DELETE_HEROE_ERROR = '[Heroes State] Delete Heroes: Error',

  LOADING = '[Heroes State] Loading',
}

// GET HEROES//
export const getAllHeroes = createAction(Types.GET_ALL_HEROES);
export const getAllHeroesSuccess = createAction(
  Types.GET_ALL_HEROES_SUCCESS,
  props<{ heroes: HeroesModel[] }>()
);
export const getAllHeroesError = createAction(
  Types.GET_ALL_HEROES_ERROR,
  props<{ error: any }>()
);

export const getHero = createAction(Types.GET_HERO, props<{ id: string }>());
export const getHeroSuccess = createAction(
  Types.GET_HERO_SUCCESS,
  props<{ hero: HeroesModel }>()
);
export const getHeroError = createAction(
  Types.GET_HERO_ERROR,
  props<{ error: any }>()
);

//SET HEROES DATA//
export const setHeroData = createAction(
  Types.SET_HEROES_DATA,
  props<{ hero: HeroesModel }>()
);
export const setHeroDataSuccess = createAction(Types.SET_HEROES_DATA_SUCCESS);
export const setHeroDataError = createAction(
  Types.SET_HEROES_DATA_ERROR,
  props<{ error: any }>()
);

//DELETE HEROES//
export const deleteHeroe = createAction(
  Types.DELETE_HEROE,
  props<{ id: string }>()
);
export const deleteHeroeSuccess = createAction(Types.DELETE_HEROE_SUCCESS);
export const deleteHeroeError = createAction(
  Types.DELETE_HEROE_ERROR,
  props<{ error: any }>()
);

export const loading = createAction(Types.LOADING);
