import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
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
