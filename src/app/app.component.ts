import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamiclayout';
  rowvalue = [12];
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
  private regForm: any;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }
  aab;
  ngOnInit() {
    this.aab = [{rowsize: '4', height: '20px' },
    {rowsize: '3', height: '30px' }, {rowsize: '3', height: '40px' },
    {rowsize: '4', height: '50px' }];
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
  onAddRow() {
    Array.prototype.push.apply(this.rowarray, this.rowvalue);
   // this.heightval[this.rowarray.length - 1 ] = 200;
    console.log(this.rowarray.length);
  }
  onRemoveRow(rowIndex: number) {
    this.rowarray.splice(rowIndex, 1);
  }
  editrow(rowIndex) {
    this.indval = rowIndex;
    this.regForm.value.heightval = '';
  }

   layout(b) {
    this.Val = b;
  }
  aa;
  layoutsave() {
    debugger
    this.rowarray.splice(this.indval, 1);
    Array.prototype.push.apply(this.rowarray, this.Val);
    console.log(this.rowarray);
    this.aa = [this.regForm.value.heightval] ;
    Array.prototype.push.apply(this.heightval, this.aa);
    //this.heightval[this.indval] = this.regForm.value.heightval;
  }
  // tslint:disable-next-line: member-ordering
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
  rowarray = ['12'];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

