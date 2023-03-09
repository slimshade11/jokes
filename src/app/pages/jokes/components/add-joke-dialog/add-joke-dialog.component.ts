import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddJokeForm } from '@jokes/models/add-joke-form.model';
import { AddJokeFormService } from '@jokes/services/add-joke-form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jokes-add-joke-dialog',
  templateUrl: './add-joke-dialog.component.html',
  styleUrls: ['./add-joke-dialog.component.scss'],
})
export class AddJokeDialogComponent implements OnInit {
  public form$: Observable<FormGroup<AddJokeForm>> = this.addJokeFormService.form$;

  public categories: any;
  public selectedCategory: any;

  constructor(private addJokeFormService: AddJokeFormService) {}

  public ngOnInit(): void {
    this.addJokeFormService.buildForm();
  }

  public onSubmit(form: FormGroup<AddJokeForm>): void {
    if (form.invalid) {
      form.markAsDirty();
      return;
    }
  }
}
