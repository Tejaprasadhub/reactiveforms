import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { SampleModalComponent } from '../sample-modal/sample-modal.component';
@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {
 //to create Teacher From 
 isRequired: boolean = false;
 successMessage:boolean=false;
 formSubmitAttempt: boolean = false;
 addUserForm!: FormGroup;
 title = 'sampleProject';
 myControl = new FormControl();
 options: string[] = ['One', 'Two', 'Three'];
 toppings = new FormControl();
 toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 filteredOptions!: Observable<string[]>;

 animal: any;
 /**
  *
  */
 constructor(private fb: FormBuilder,public dialog: MatDialog) {

 }

 ngOnInit(): void {
   this.createForm();
   this.filteredOptions = this.myControl.valueChanges.pipe(
     startWith(''),
     map(value => this._filter(value))
   );
 }

 private _filter(value: string): string[] {
   const filterValue = value.toLowerCase();

   return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
     this.successMessage=true;
   } else {
   }
 }
 Reset() {
   this.successMessage=false;
   this.formSubmitAttempt = false;
 }
 BindData(){
   this.addUserForm.setValue({
     'username': "Teja",
     'usertype': "ADMN",
     'userdob':new Date("07/08/2018"),
     'userautocomplete': "Two",
     'userqualification': ["Mushroom","Onion"]
   })
 }

 openDialog(): void {
  const dialogRef = this.dialog.open(SampleModalComponent, {
    // width: '250px',
    data: {animal: this.animal}    
  });

  dialogRef.afterClosed().subscribe(result => {
    debugger
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}
