import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerObj } from '../../customer';

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

  createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  updateCustomer(fname, lname, birthday, gender) {
    this.route.params.subscribe(params => {
      this.service.updateCustomer(fname, lname, birthday, gender, params['id'])
        .subscribe(res => {
          console.log('Done updating id# ' + res['_id']);
          this.router.navigate(['index']);
        });

    });
  }

  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      console.log('Deleted id# ' + res['_id']);
      this.router.navigate(['index']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getCustomer(params['id']).subscribe(res => {
        console.log('Fetched id# ' + res['_id']);
        this.customer = res;
      });
    });
  }

}
