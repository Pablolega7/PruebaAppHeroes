export interface HeroesModel {
  superhero: string;
  characters: string;
  id: string;
  power: string;
  publisher: string;
  favorite: boolean;
};

export class Heroes implements HeroesModel {
  constructor(
    public superhero: string,
    public characters: string,
    public id: string,
    public power: string,
    public publisher: string,
    public favorite: boolean
  ) {};
};
