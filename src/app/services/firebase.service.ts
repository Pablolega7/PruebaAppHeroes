//ANGULAR//
import { Injectable } from '@angular/core';
//FIREBASE//
import {
  collection,
  doc,
  Firestore,
  getFirestore,
  setDoc,
} from '@angular/fire/firestore';
import { deleteDoc, getDoc, getDocs, query } from 'firebase/firestore';
//NGRX//
import { Store } from '@ngrx/store';
import { MainState } from '../main.reducer';
//MODELOS//
import { HeroesModel, Heroes } from '../models/heroes.models';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: Firestore, private store: Store<MainState>) {}

  //FUNCION DE FIREBASE PARA SETEAR LOS HEROES//
  setHeroes = async (heroes: HeroesModel) => {
    const newHeroes = doc(getFirestore(), 'heroes', heroes.id);
    return setDoc(newHeroes, { ...heroes }, { merge: true });
  };

  //FUNCION DE FIREBASE PARA TRAER LOS HEROES//
  getAllHeroes = async () => {
    const heroesCollection = collection(getFirestore(), 'heroes');
    const q = query(heroesCollection);
    let documents: HeroesModel[] = [];
    const queryCollection = await getDocs(q);
    queryCollection.forEach((doc) => {
      let { superhero, characters, id, power, publisher, favorite } =
        doc.data();
      documents.push(
        new Heroes(superhero, characters, id, power, publisher, favorite)
      );
    });
    return documents;
  };

  //FUNCION DE FIREBASE PARA ELIMINAR HEROES//
  deleteHeroe = async (id: string) =>
    await deleteDoc(doc(getFirestore(), 'heroes', id));

  //FUNCION DE FIREBASE PARA UN HEROE POR ID//
  getHeroData = async (uid: string): Promise<HeroesModel> => {
    const docSnap = await getDoc(doc(getFirestore(), 'heroes', uid));
    let { superhero, characters, id, power, publisher, favorite } =
      docSnap.data();
    return docSnap.exists()
      ? new Heroes(superhero, characters, id, power, publisher, favorite)
      : null;
  };
};
