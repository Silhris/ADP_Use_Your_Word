import { Component } from '@angular/core';

interface Manifest {
  packages: any; // Remplacez "any" par le type approprié pour la propriété "packages"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'use-your-word';
  manifest: Manifest = {
    packages: []
  };
  categories: string[] = ['blank-o-matic', 'blank-o-matic_FR', 'extraExtra', 'extraExtra_FR', 'subTheTitle', 'subTheTitle_FR', 'surveySays', 'surveySays_FR'];
  selectedCategory: string = "";
  selectedCategoryData: [] = [];

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

  selectCategory(category: string) {
    console.log(this);
    this.selectedCategory = category;
    this.selectedCategoryData = this.manifest.packages[0][this.selectedCategory];
  }
}
