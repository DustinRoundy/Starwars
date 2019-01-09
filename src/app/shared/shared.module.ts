import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForceComponent} from "./force/force.component";
import {ForceChangeDialogComponent} from "./force/force-change-dialog/force-change-dialog.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [
    ForceComponent,
    ForceChangeDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule

  ],
  exports: [
    FormsModule,
    MaterialModule,
    ForceChangeDialogComponent,
    ForceComponent,
  ]
})
export class SharedModule { }
