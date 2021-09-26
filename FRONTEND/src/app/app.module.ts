import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountFormSummaryComponent } from './account-form-summary/account-form-summary.component';
import { TetiereComponent } from './tetiere/tetiere.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccountFormComponent,
    AccountFormSummaryComponent,
    TetiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
