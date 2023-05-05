import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'use-your-word';
  manifest: [] = [];
  categories: String[] = ['blank-o-matic', 'blank-o-matic_FR', 'extraExtra', 'extraExtra_FR', 'subTheTitle', 'subTheTitle_FR', 'surveySays', 'surveySays_FR'];
  selectedCategory: String = "";

  ngOnInit() {
    this.fetchJSON();
  }

  async fetchJSON() {
    const result = await fetch('http://localhost:3000/manifest');
    this.manifest = await result.json();
  }

  yoloTest() {
    console.log('Yolo Test!');
    console.log(this);
  }
}
