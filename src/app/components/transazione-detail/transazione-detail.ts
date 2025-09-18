import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';
import { CurrencyPipe, DatePipe, JsonPipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-transazione-detail',
  imports: [JsonPipe, NgClass, CurrencyPipe, DatePipe],
  templateUrl: './transazione-detail.html',
  styleUrl: './transazione-detail.css'
})
export class TransazioneDetail {

  // transazione: è una variabile di input che riceve un singolo oggetto di tipo Transazione dal componente padre
  // ?: indica che la variabile è opzionale, quindi può anche non essere passata
  // Transazione: è un'interfaccia (o classe) definita nel progetto che descrive la struttura dei dati della transazione
  // Non ci sono le [] perché qui si riceve un solo oggetto (una transazione) e non un array di più transazioni
  @Input()
  transazione?: Transazione;

}
