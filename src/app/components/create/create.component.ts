import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

  /**
  * CreateComponent
  * Creates form and provide methods
  * for adding a new customer.
  */

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  title = 'Add Customer';
  angForm: FormGroup;

  constructor(private service: CustomerService, private router: Router, private fb: FormBuilder) {
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
  * addCustomer
  * Send request to the CustomerService to add a customer with the info received in params:
  * @param {string} fname - new first name.
  * @param {string} lname - new last name.
  * @param {string} birthday - new birthday.
  * @param {string} gender - new gender.
  */
  addCustomer(fname, lname, birthday, gender) {
    this.service.addCustomer(fname, lname, birthday, gender).subscribe(res => {
      console.log('Added id# ' + res['_id']);
      this.router.navigate(['index']);
    },
      err => {
        console.error(err);
      });
  }
  ngOnInit() {
  }

}
