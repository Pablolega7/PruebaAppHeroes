//ANGULAR//
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//MODELOS//
import { Heroes } from '../../models/heroes.models';
//NGRX//
import { Store } from '@ngrx/store';
import { MainState } from '../../main.reducer';
import { setHeroData } from '../../store/heroesState/heroes.actions';
//SWEETALERT2//
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss'],
})
export class NewHeroComponent implements OnInit {
  publisher: any[] = ['DC', 'Marvel'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<MainState>) {
    this.createForm();
  }

  ngOnInit = () => this.createForm();

  createForm = () => {
    this.form = this.fb.group({
      characters: ['', Validators.required],
      power: ['', Validators.required],
      publisher: ['', Validators.required],
      superhero: ['', Validators.required],
    });
  };

  saveHeroe = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'The superhero will be Created!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create!',
    }).then((result) => {
      if (result.isConfirmed) {
        let { superhero, characters, power, publisher } = this.form.value;
        this.store.dispatch(
          setHeroData({
            hero: new Heroes(
              superhero,
              characters,
              new Date().getTime().toString(),
              power,
              publisher,
              false
            ),
          })
        );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };
}
