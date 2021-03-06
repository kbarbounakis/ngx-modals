import { NgModule } from '@angular/core';
import { RouterModalComponent } from './RouterModalComponent';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [RouterModalComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [RouterModalComponent]
})
export class RouterModalModule { }
