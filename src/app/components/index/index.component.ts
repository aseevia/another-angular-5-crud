import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../customer.service';
import { CustomerObj } from '../../customer';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  customers: CustomerObj[];

  constructor(private http: HttpClient, private service: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.service.getCustomers().subscribe(res => {
      console.log('Done fetching customers');
      this.customers = res;
    });
  }

  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      console.log('Deleted id# ' + res['_id']);
      this.getCustomers();
    });
  }

}
