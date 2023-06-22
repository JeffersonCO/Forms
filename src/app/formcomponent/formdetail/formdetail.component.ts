import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.scss']
})
export class FormdetailComponent {
    profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })
}
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
}