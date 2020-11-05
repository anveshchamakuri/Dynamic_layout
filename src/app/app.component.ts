import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from "@angular/forms";
import {  HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Angular 4';
  height = 150;
  y = 100;
  oldY = 0;
  grabber = false;
  hindex;
  rowchange(index){
    this.hindex = index;
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
        return;
    }
    this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  resizer(offsetY: number) {
    debugger
    this.height += offsetY;
  }


  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldY = event.clientY;
  }

  title = 'dynamiclayout';
  items = [
    'Item 0',
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
  ]
  div1;
  div2;
  btns;
  previewbtn;
  smartphonediv;
  tabletdiv;
  laptopdiv;
  icns;
  heightval = [];
  indval;
  Val;
  rowarray = []
  private regForm: any;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }
  aab;
  rowvalue;
  ngOnInit() {
    this.rowvalue =  { rowsize : '12'};
    this.rowarray  =  [{ rowsize : '12'}];
    this.regForm = this.formBuilder.group({
      heightval: ['', Validators.required]
    });
    this.div1 = true;
    this.div2 = false;
    this.btns = false;
    this.previewbtn = true;
    this.smartphonediv = false;
    this.tabletdiv = false;
    this.laptopdiv = false;
    this.icns = false;
    this.heightval = [];
  }
  an;
  cha(rowIndex) {
    debugger
    this.an = {val : this.regForm.value.heightval};
    console.log(this.rowarray)
    this.rowarray[rowIndex]['Data'] = this.an;
    //this.aa = [this.regForm.value.heightval] ;
  }
  onAddRow() {
    debugger
    this.rowarray.push(this.rowvalue);
    console.log(this.rowarray);
    console.log(this.rowarray);
  }
  onRemoveRow(rowIndex: number) {
    this.rowarray.splice(rowIndex, 1);
  }
  editrow(rowIndex) {
    this.indval = rowIndex;
    this.regForm.value.heightval = '';
  }
  Vall;
   layout(b,c) {
    this.Val = b;
    this.Vall = c;
  }
  aa;
  layoutsave() {
    debugger
    this.rowarray.splice(this.indval, 1);
    this.rowarray.push(this.Val, this.Vall);
  }
  closeResult = '';

  /***Edit* */
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  preview() {
    debugger
    console.log(this.rowarray);
    this.div1 = false;
    this.div2 = true;
    this.btns = true;
    this.previewbtn = false;
    this.icns = true;
  }
  previewback() {
    this.div1 = true;
    this.div2 = false;
    this.previewbtn = true;
    this.btns = false;
    this.smartphonediv = false;
    this.tabletdiv = false;
    this.laptopdiv = false;
  }
  smartphone() {
    this.div2 = false;
    this.smartphonediv = true;
    this.tabletdiv = false;
    this.laptopdiv = false;
  }
  tablet() {
    this.div2 = false;
    this.smartphonediv = false;
    this.tabletdiv = true;
    this.laptopdiv = false;
  }
  laptop() {
    this.div2 = false;
    this.smartphonediv = false;
    this.tabletdiv = false;
    this.laptopdiv = true;
  }
 }

