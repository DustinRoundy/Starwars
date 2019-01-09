import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ForceChangeDialogComponent} from "./force-change-dialog/force-change-dialog.component";

@Component({
  selector: 'dr-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.sass']
})
export class ForceComponent implements OnInit {

  @Input() forceStrength: number;
  @Output() onForceChange: EventEmitter<number> = new EventEmitter();
  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
  }

  onForceClick() {
    let dialogRef = this.dialog.open(ForceChangeDialogComponent, {
      width: '400px',
      data: { force: this.forceStrength }
    });
    dialogRef.afterClosed().subscribe(force => {
      if (force) {
        this.onForceChange.emit(force);
      }
    });
  }

  width() {
    return this.forceStrength * 12;
  }
}
