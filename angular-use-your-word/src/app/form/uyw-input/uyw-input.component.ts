import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-uyw-input',
  templateUrl: './uyw-input.component.html',
  styleUrls: ['./uyw-input.component.sass']
})
export class UywInputComponent {
  favoriteColorControl = new FormControl('');
}
