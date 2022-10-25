//ANGULAR//
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//ANGULAR MATERIAL//
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
//MODELOS//
import { HeroesModel } from '../../models/heroes.models';
//NGRX//
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/main.reducer';
import {
  deleteHeroe,
  getAllHeroes,
  loading,
  setHeroData,
} from '../../store/heroesState/heroes.actions';
import { selectHeroes } from 'src/app/store/heroesState/heroes.selectors';
//RJXS//
import { Observable, Subscription } from 'rxjs';
//SWEETALERT//
import Swal from 'sweetalert2';
import { selectLoading } from '../../store/heroesState/heroes.selectors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'characters',
    'favorite',
    'power',
    'superhero',
    'publisher',
    'tools',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public heroes$: Observable<HeroesModel[] | null> =
    this.store.select(selectHeroes);
  private heroeSubs: Subscription;
  public heroes: HeroesModel[] | null;

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private store: Store<MainState>, private router: Router) {
    this.store.dispatch(loading());
  }

  ngOnInit(): void {
    this.store.dispatch(getAllHeroes());
    this.heroeSubs = this.heroes$.subscribe((heroes) => {
      this.dataSource = new _MatTableDataSource(heroes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteHeroes = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'The superheroes will be erased!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deleteHeroe({ id }));
        this.router.navigate(['/dashboard']);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  saveHero = (hero: HeroesModel) =>
    this.store.dispatch(
      setHeroData({ hero: { ...hero, favorite: !hero.favorite } })
    );

  ngOnDestroy(): void {
    this.heroeSubs?.unsubscribe();
  }
}
