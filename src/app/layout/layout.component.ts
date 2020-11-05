import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  form: FormGroup;
  rowarray =  ['12'];
  rowvalue =  ['12'];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      'row' : this.rowarray,
      'Xs': this.fb.array([
        this.initX()
      ])
    });
  }

  initX() {
    debugger
    return this.fb.group({
      'X': ['X'],
     });
  }

  onAddRow() {
    debugger
    Array.prototype.push.apply(this.rowarray, this.rowvalue);
    const control = <FormArray>this.form.controls['Xs'];
    control.push(this.initX());
  }
}