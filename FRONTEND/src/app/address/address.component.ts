import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  @Input()
  test : string = "test";
  @Input()
  postcode : string = "";
  @Input()
  city : string = "";
  @Input()
  country : string = "";

  ngOnInit(): void {
  }

}
