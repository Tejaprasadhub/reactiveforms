import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.css']
})
export class SampleModalComponent  {
  isRequired: boolean = false;
  formSubmitAttempt: boolean = false;
  addUserForm!: FormGroup;
  myControl = new FormControl();
 options: string[] = ['One', 'Two', 'Three'];
 toppings = new FormControl();
 toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 filteredOptions!: Observable<string[]>;
  constructor(
    public dialogRef: MatDialogRef<SampleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.createForm();
  }

  //Create form method to constuct a form with validations
 createForm() {
  this.addUserForm = this.fb.group({
    username: new FormControl('', { validators: [Validators.required] }),
    usertype: new FormControl('', { validators: [Validators.required] }),
    userdob: new FormControl('', { validators: [Validators.required] }),
    userautocomplete: new FormControl('', { validators: [Validators.required] }),
    userqualification: new FormControl([], { validators: [Validators.required] })
  });
  }

  addUserSubmit() {
    this.formSubmitAttempt = true;
     if (this.addUserForm.valid) {
      this.formSubmitAttempt = false;
       console.log(this.addUserForm.value);
      //  this.successMessage=true;
     } else {
     }
   }

}
