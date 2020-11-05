import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  imports:      [ ModalModule, BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, 
    MatButtonModule, MatDialogModule, NgbModule, DragDropModule ],
  declarations: [ AppComponent, LayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
