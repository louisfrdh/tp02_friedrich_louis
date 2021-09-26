import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  valid : boolean = false;

  lastname : string = "";
  firstname : string = "";
  title : string = "";
  email : string = "";
  
  login : string = "";
  password : string = "";
  
  street : string = "";
  postcode : string = "";
  city : string = "";
  country : string = "";

  titles : Array<string> = ["Homme", "Femme"];

  onSubmit(){
    this.valid = true;
  }

  constructor() { }
  
  ngOnInit(): void {
  }
  
}
