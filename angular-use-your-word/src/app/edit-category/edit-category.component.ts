import { Component, Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.sass']
})
export class EditCategoryComponent implements OnChanges {
  tabs: String[] = ['Création', 'Édition'];
  @Input() item: {} = {};
  @Input() data: {} = {};


  getVideoPath(element: any) {
    return 'StreamingAssets/Content/SubTheTitle/' + element.id + '/' + element.name;
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
