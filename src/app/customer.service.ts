import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CustomerObj } from './customer';

  /**
  * class CustomerService
  *
  * collection of methods for CRUD operations
  * on customers through an external API.
  * Convert urls to remote ones if you deploy the
  * server.js on a remote server.
  * '/customers/add' => 'http://myserver.api/customers/add'
  */

@Injectable()
export class CustomerService {

  result: any;
  constructor(private http: HttpClient) { }

  /**
  * addCustomer
  * creates customer with the info received in params:
  * @param {string} fname - new first name.
  * @param {string} lname - new last name.
  * @param {string} birthday - new birthday.
  * @param {string} gender - new gender.
  * @returns Observable of CustomerObj[], so we can subscribe to get the data or handle errors.
  */
  addCustomer(fname, lname, birthday, gender) {
    const uri = '/customers/add';
    const obj: CustomerObj = {
      _id: undefined,
      name: {
        first: fname,
        last: lname
      },
      birthday: birthday,
      gender: gender,
      lastContact: '',
      customerLifetimeValue: 0,
    };
    return this.http.post<CustomerObj[]>(uri, obj);
  }

  /**
  * Get all customers available for the base URL.
  * @returns Observable of CustomerObj[], so we can subscribe to get the data or handle errors.
  */
  getCustomers(): Observable<CustomerObj[]> {
    const uri = '/customers';
    return this.http.get<CustomerObj[]>(uri);
  }

  /**
  * Get customer by id.
  * @param id - id of the customer to fetch.
  * @returns Observable of CustomerObj, so we can subscribe to get the data or handle errors.
  */
  getCustomer(id): Observable<CustomerObj> {
    const uri = '/customers/get/' + id;
    return this.http.get<CustomerObj>(uri);
  }

  /**
  * updateCustomer
  * look up customer by id, and then update with the info received in params:
  * @param {string} fname - new first name.
  * @param {string} lname - new last name.
  * @param {string} birthday - new birthday.
  * @param {string} gender - new gender.
  * @param id - id of the customer to fetch.
  * @returns Observable of CustomerObj[], so we can subscribe to get the data or handle errors.
  */
  updateCustomer(fname, lname, birthday, gender, id): Observable<CustomerObj[]> {
    const uri = '/customers/update/' + id;

    const obj: CustomerObj = {
      _id: id,
      name: {
        first: fname,
        last: lname
      },
      birthday: birthday,
      gender: gender,
      lastContact: '',
      customerLifetimeValue: 0,
    };
    return this.http.post<CustomerObj[]>(uri, obj);
  }

  /**
  * Delete customer by id.
  * @param id - id of the customer to delete.
  * @returns Observable of CustomerObj, so we can subscribe to get the data or handle errors.
  */
  deleteCustomer(id): Observable<CustomerObj> {
    const uri = '/customers/delete/' + id;
    return this.http.get<CustomerObj>(uri);
  }

}
