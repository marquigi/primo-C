import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';
import { TransazioneDetail } from "../transazione-detail/transazione-detail";

@Component({
  selector: 'app-transazioni-list',
  imports: [TransazioneDetail],
  templateUrl: './transazioni-list.html',
  styleUrl: './transazioni-list.css'
})
export class TransazioniList {

  @Input() // in Angular serve a ricevere dati da un componente “genitore” in un componente “figlio”.
  transactions: Transazione[] = [];
  // 'transactions' è un array di oggetti di tipo Transazione e viene inizializzato con il contenuto di TRANSAZIONI.
  // Specificare ': Transazione[]' rende esplicito il tipo dei dati e aiuta TypeScript a fare i controlli.; questi vanno poi importati (es.riga 1 e 2.)
}
