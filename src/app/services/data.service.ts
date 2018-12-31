import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usersList = [ 
    {'name' : 'Gowtham', 'id' : 0}, 
    {'name' : 'Gowtham R', 'id' : 1}, 
    {'name' : 'Prabhu', 'id' : 2},
    {'name' : 'Rakesh', 'id' : 3},
    {'name' : 'Mohan', 'id' : 4}
  ];
  userDetails = [
    {
      'name' : 'Gowtham',
      'dob' : '1988',
      'gender' : 'Male'

    },
    {
      'name' : 'Gowtham R',
      'dob' : '1988',
      'gender' : 'Male'

    },
    {
      'name' : 'Prabhu',
      'dob' : '1981',
      'gender' : 'Male'

    },
    {
      'name' : 'Rakesh',
      'dob' : '1993',
      'gender' : 'Male'

    },
    {
      'name' : 'Mohan',
      'dob' : '1992',
      'gender' : 'Male'

    }
  ]

  constructor() { }

  getUsersList(name: string) {
    return this.usersList.filter(function(item){
      return JSON.stringify(item.name).toLowerCase().includes(name.toLowerCase());
    });
    
  }

  getUser(id: number) {
    if(this.userDetails[id]) {
      return this.userDetails[id];
    } else {
      return '';
    }
    
  }
}
