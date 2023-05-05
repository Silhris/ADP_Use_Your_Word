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

  // Utiliser une fonction fléchée permet de rendre "this" disponible, malgré que ce soit une fonction asynchrone
  fetchJSON = async() => {
    const result = await fetch('http://localhost:3000/manifest');
    this.manifest = await result.json();
  }

  saveJSON = async() => {
    const result = await fetch('http://localhost:3000/manifest', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.manifest)
    });
    console.log('postJSON response');
    console.log(await result.text());
  }

  yoloTest() {
    console.log('Yolo Test!');
    console.log(this);
  }
}
