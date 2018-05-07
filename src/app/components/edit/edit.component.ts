import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerObj } from '../../customer';

  /**
  * EditComponent
  * Creates form and provide methods
  * for editing or deleting a customer.
  */

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  customer: CustomerObj = {
    _id: '',
    name: {
      first: '',
      last: ''
    },
    birthday: '',
    gender: '',
    lastContact: '',
    customerLifetimeValue: 0,
  };

  angForm: FormGroup;
  title = 'Edit Customer';
  constructor(private route: ActivatedRoute, private router: Router, private service: CustomerService, private fb: FormBuilder) {
    this.createForm();
  }

 /**
 * createForm()
 * Creates Angular's reactive form with validators
 */
  createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  /**
  * updateCustomer
  * Send request to the CustomerService to fetch the customer by id,
  * and then update with the info in params:
  * @param {string} fname - new first name.
  * @param {string} lname - new last name.
  * @param {string} birthday - new birthday.
  * @param {string} gender - new gender.
  */
  updateCustomer(fname, lname, birthday, gender) {
    this.route.params.subscribe(params => {
      this.service.updateCustomer(fname, lname, birthday, gender, params['id'])
        .subscribe(res => {
          console.log('Done updating id# ' + res['_id']);
          this.router.navigate(['index']);
        }, err => {
          console.log(err);
        });

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
      this.router.navigate(['index']);
    }, err => {
      console.log(err);
    });
  }

  /**
  * Send request to the CustomerService to get customer by id,
  * populate the edit form with received data.
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getCustomer(params['id']).subscribe(res => {
        console.log('Fetched id# ' + res['_id']);
        this.customer = res;
      }, err => {
        console.log(err);
      });
    });
  }

}
