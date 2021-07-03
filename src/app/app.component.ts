import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //to create Teacher From 
  isRequired: boolean = false;
  addUserForm!: FormGroup;
  title = 'sampleProject';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  filteredOptions!: Observable<string[]>;
  /**
   *
   */
  constructor(private fb: FormBuilder) {

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
    if (this.addUserForm.valid) {
      console.log(this.addUserForm.value);
    } else {
    }
  }
  Reset() {
    this.addUserForm.reset();
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

}


