import { Injectable } from '@angular/core';

@Injectable()
export class CityService {
  // city list array
  CityList: string[]= [];
  // intializing CityList in constructor
  constructor() {
    this.CityList.unshift('Chennai');
    this.CityList.unshift('Bangalore');
    this.CityList.unshift('Hyderabad');
    this.CityList.unshift('Pune');
   }

   // returning the cityList array
  getCityList(): string[] {
    return this.CityList;
  }
}
