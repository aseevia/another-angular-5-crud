import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../customer.service';
import { CustomerObj } from '../../customer';

  /**
  * IndexComponent
  * Displays list of customers.
  * WARNING: NO pagination implemented, be carefull with long lists.
  */

 @Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  customers: CustomerObj[];

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  /**
  * getCustomers()
  * Send request to the CustomerService to get all the customers,
  * populate the list with the received data.
  */
  getCustomers() {
    this.service.getCustomers().subscribe(res => {
      console.log('Done fetching customers');
      this.customers = res;
    }, err => {
      console.log(err);
    });
  }

  /**
  * deleteCustomer
  * Send request to the CustomerService to delete customer by id.
  * @param id - id of the customer to delete.
  */
  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      console.log('Deleted id# ' + res['_id']);
      this.getCustomers();
    }, err => {
      console.log(err);
    });
  }

}
