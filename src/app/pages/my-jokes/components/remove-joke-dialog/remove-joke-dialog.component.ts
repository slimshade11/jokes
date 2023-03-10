import { Component, inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'jokes-remove-joke-dialog',
  templateUrl: './remove-joke-dialog.component.html',
  styleUrls: ['./remove-joke-dialog.component.scss'],
})
export class RemoveJokeDialogComponent {
  private dialogRef: DynamicDialogRef = inject(DynamicDialogRef);

  onClose(isConfirmed: boolean): void {
    this.dialogRef.close(isConfirmed);
  }
}
