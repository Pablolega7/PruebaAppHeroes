//ANGULAR//
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//NGRX//
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/main.reducer';
import { getHero, setHeroData } from '../../store/heroesState/heroes.actions';
import { selectHero } from '../../store/heroesState/heroes.selectors';
//RXJS//
import { Observable, Subscription } from 'rxjs';
//SWEETSLERT2//
import Swal from 'sweetalert2';
//MODELOS//
import { HeroesModel, Heroes } from '../../models/heroes.models';

@Component({
  selector: 'app-edit-heroe',
  templateUrl: './edit-heroe.component.html',
  styleUrls: ['./edit-heroe.component.scss'],
})
export class EditHeroeComponent implements OnInit, OnDestroy {
  publisherOpt: any[] = ['DC', 'Marvel'];
  id = this.route.snapshot.paramMap.get('id');

  private hero$: Observable<HeroesModel> = this.store.select(selectHero);
  private heroSubs: Subscription;

  public characters: string;
  public power: string;
  public publisher: string;
  public superhero: string;
  public favorite: boolean;

  constructor(private route: ActivatedRoute, private store: Store<MainState>) {}

  ngOnInit(): void {
    this.store.dispatch(getHero({ id: this.id }));
    this.heroSubs = this.hero$.subscribe((hero) => {
      if (hero) {
        let { characters, favorite, power, publisher, superhero } = hero;
        this.characters = characters;
        this.favorite = favorite;
        this.publisher = publisher;
        this.power = power;
        this.superhero = superhero;
      }
    });
  }

  editHero = () => {
    Swal.fire({
      title: 'Are you Sure?',
      text: 'The changes made will be Saved!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(
          setHeroData({
            hero: new Heroes(
              this.superhero,
              this.characters,
              this.id,
              this.power,
              this.publisher,
              this.favorite
            ),
          })
        );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  ngOnDestroy(): void {
    this.heroSubs?.unsubscribe();
  }
}
