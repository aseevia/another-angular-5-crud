import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CustomerObj } from './customer';

@Injectable()
export class CustomerService {

  result: any;
  constructor(private http: HttpClient) { }

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

  getCustomers(): Observable<CustomerObj[]> {
    const uri = '/customers';
    return this.http.get<CustomerObj[]>(uri);
  }

  getCustomer(id): Observable<CustomerObj> {
    const uri = '/customers/get/' + id;
    return this.http.get<CustomerObj>(uri);
  }

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

  deleteCustomer(id): Observable<CustomerObj> {
    const uri = '/customers/delete/' + id;

    return this.http.get<CustomerObj>(uri);
  }

}
