import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CityService } from '../Services/City-Service';
import { Customer } from '../models/customer';
import { CustomerService } from '../Services/Customer-Service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  // City list array and the customer list array
  cityList: string[] = [];
  customerList: Customer[] = [];
  // cutsomer instance
  customer: Customer =  new Customer();
  form: FormGroup;
  @Input() showDetail = false;

  // using the city service form builder and customer service using constructor dependency injection

  constructor(private cityService: CityService, private formBuilder: FormBuilder, private customerService: CustomerService) {
    this.createForm();
  }

// Declaring the form elements validations using the form builder

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  // initializing the form elements and calling the city service and customer service to display it

  ngOnInit() {
  this.customer.name = '';
  this.customer.email = '';
  this.customer.phone = 0;
  this.cityList = this.cityService.getCityList();
  this.customerList = this.customerService.getCustomerList();
  }

// calling the service to add a customer using onSave when the form button is clicked

  onSave(Values) {
    this.customer.name = Values.name;
    this.customer.email = Values.email;
    this.customer.phone = Values.phone;
    this.customer.city = Values.city;
    this.customerService.storeCustomer(this.customer);
    this.customer = new Customer();
    this.showDetail = true;
  }
 }

