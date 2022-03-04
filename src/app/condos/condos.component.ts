import { Component, OnInit } from '@angular/core';
import {Condo} from './condo';

@Component({
  selector: 'app-condos',
  templateUrl: './condos.component.html'
})
export class CondosComponent implements OnInit {

  condos: Condo[] = [
    { id: 1, nombre: 'Andrés', direccion: 'Guzmán', email: 'profesor@bolsadeideas.com', createAt: '2017-12-11' },
    { id: 2, nombre: 'Mr. John', direccion: 'Doe', email: 'john.doe@gmail.com', createAt: '2017-11-11' },
    { id: 3, nombre: 'Linus', direccion: 'Torvalds', email: 'linus.torvalds@gmail.com', createAt: '2017-11-12' },
    { id: 4, nombre: 'Rasmus', direccion: 'Lerdorf', email: 'rasmus.lerdorf@gmail.com', createAt: '2017-11-13' },
    { id: 5, nombre: 'Erich', direccion: 'Gamma', email: 'erich.gamma@gmail.com', createAt: '2017-11-14' },
    { id: 6, nombre: 'Richard', direccion: 'Helm', email: 'richard.helm@gmail.com', createAt: '2017-11-15' },
    { id: 7, nombre: 'Ralph', direccion: 'Johnson', email: 'ralph.johnson@gmail.com', createAt: '2017-11-16' },
    { id: 8, nombre: 'Bombasto', direccion: 'Vlissides', email: 'bombasto.vlissides@gmail.com', createAt: '2017-11-17' },
    { id: 9, nombre: 'Dr James', direccion: 'Gosling', email: 'james.gosling@gmail.com', createAt: '2017-11-18 ' },
    { id: 10, nombre: 'Magma', direccion: 'Lee', email: 'magma.lee@gmail.com', createAt: '2017-11-19' },
    { id: 11, nombre: 'Tornado', direccion: 'Roe', email: 'tornado.roe@gmail.com', createAt: '2017-11-20' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
