import { Component, EventEmitter, NgModule, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import { UywInputComponent } from '../form/uyw-input/uyw-input.component';

@Component({
  standalone: true,
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.sass'],
  imports: [
    CdkAccordionModule,
    CommonModule,
    MatTabsModule,
    UywInputComponent
  ]
})
export class EditCategoryComponent implements OnChanges {
  tabs: String[] = ['Création', 'Édition'];
  @Input() selectedCategoryName: string = "";
  @Input() data: [] = [];
  @Output() dataChange = new EventEmitter<[]>();


  getVideoPath(element: any) {
    return 'StreamingAssets/Content/SubTheTitle/' + element.id + '/' + element.name;
  }

  testMethod() {
    console.log('testMethod');
    this.dataChange.emit(this.data);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleChanges');
    console.log(this);

  }
}
