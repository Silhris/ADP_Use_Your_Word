import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

// TODO: temporaire pour tester la récupération de toutes les erreurs
class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // do something with the exception
    console.log('inside MyErrorHandler');
    console.log(error);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    EditCategoryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
