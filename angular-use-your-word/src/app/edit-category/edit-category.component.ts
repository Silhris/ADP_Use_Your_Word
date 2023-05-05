import { Component, NgModule, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.sass']
})
export class EditCategoryComponent implements OnChanges {
  tabs: String[] = ['Création', 'Édition'];

  getVideoPath(element: any) {
    return 'StreamingAssets/Content/SubTheTitle/' + element.id + '/' + element.name;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this);
  }
}
