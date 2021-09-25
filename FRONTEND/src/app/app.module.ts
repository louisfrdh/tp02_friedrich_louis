import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountFormSummaryComponent } from './account-form-summary/account-form-summary.component';
import { AddressComponent } from './address/address.component';
import { TetiereComponent } from './tetiere/tetiere.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    AccountFormComponent,
    AccountFormSummaryComponent,
    AddressComponent,
    TetiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
