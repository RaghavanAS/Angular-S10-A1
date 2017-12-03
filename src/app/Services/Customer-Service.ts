import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  // initializing the CustomerList array of Customer
  CustomerList: Customer[]= [];
  constructor() {}
  // returning the CustomerList array of customer
  getCustomerList(): Customer[] {
    return this.CustomerList;
  }

  // adding a customer to the CustomerList
  storeCustomer(customer: Customer) {
      this.CustomerList.unshift(customer);
      console.log(this.CustomerList);
  }
}
