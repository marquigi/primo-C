import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TRANSAZIONI } from './transazioni-dati';
import { Transazione } from './models/transazione'
import { TransazioniList } from "./components/transazioni-list/transazioni-list";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TransazioniList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primo-C');

  dati: Transazione[] = TRANSAZIONI;
  // 'dati' è un array di oggetti di tipo Transazione e viene inizializzato con il contenuto di TRANSAZIONI.
  // Specificare ': Transazione[]' rende esplicito il tipo dei dati e aiuta TypeScript a fare i controlli.; questi vanno poi importati (es. riga 3 e 4.)
}
