import { HeroesModel } from 'src/app/models/heroes.models';

export interface HeroesState {
  loading: boolean;
  error: any;
  heroes: HeroesModel[];
  heroEdit: HeroesModel;
  search: string | null;
}

export const initialState: HeroesState = {
  loading: false,
  heroes: [],
  heroEdit: null,
  error: null,
  search: null,
};
