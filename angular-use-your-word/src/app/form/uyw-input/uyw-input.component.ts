import { Component, EventEmitter, Input, SimpleChanges, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  selector: 'app-uyw-input',
  templateUrl: './uyw-input.component.html',
  styleUrls: ['./uyw-input.component.sass'],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UywInputComponent {
  @Input() item: String = '';
  @Output() itemChange = new EventEmitter<String>();
  favoriteColorControl = new FormControl(this.item);

  // Permet de mettre à jour la valeur saisi depuis l'input dans la donnée en format JSON
  yolo() {
    // CKC ... two way binding cassé
    this.itemChange.emit(this.item);
  }

  // Permet d'affecter la valeur récupéré depuis la donnée en format JSON
  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleChanges');
    console.log(this);
    this.favoriteColorControl.setValue(this.item);
  }
}
