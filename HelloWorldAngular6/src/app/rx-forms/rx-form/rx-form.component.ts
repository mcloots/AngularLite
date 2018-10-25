import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.css']
})
export class RxFormComponent implements OnInit {

 /* studentForm = new FormGroup({
    voornaam: new FormControl('', Validators.required),
    naam: new FormControl('', Validators.required)
  });*/

  studentForm = this.fb.group({
    voornaam: ['Reactive', Validators.required],
    naam: ['Forms', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.studentForm.valueChanges.subscribe(val => {
      console.log(val.voornaam + " " + val.naam);
    });

    this.studentForm.get('voornaam').valueChanges.subscribe(val => {
      console.log("Nieuwe waarde voornaam: " + val);
    })
  }

  onSubmit() {
    console.log(this.studentForm.value);
  }

}
