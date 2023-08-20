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
  @Input() indexFirstValue: number = 0;
  @Input() indexSecondValue: number = 0;
  @Input() data: any;
  @Output() dataChange = new EventEmitter<[]>();

  favoriteColorControl = new FormControl();

  // Permet de mettre à jour la valeur saisi depuis l'input dans la donnée en format JSON
  yolo() {
    this.data[this.indexFirstValue]['houseAnswers'][this.indexSecondValue] = this.favoriteColorControl.value;
    this.dataChange.emit(this.data);
  }

  // Permet d'affecter la valeur récupéré depuis la donnée en format JSON
  ngOnChanges(changes: SimpleChanges) {
    this.favoriteColorControl.setValue(this.item);
  }
}
