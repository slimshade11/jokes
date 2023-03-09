import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Joke } from '@common/models/joke.model';
import { Categories } from '@common/constants/categories';
import { Category } from '@common/models/category.model';
import { AddJokeForm } from '@jokes/models/add-joke-form.model';
import { AddJokeFormService } from '@jokes/services/add-joke-form.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'jokes-add-joke-dialog',
  templateUrl: './add-joke-dialog.component.html',
  styleUrls: ['./add-joke-dialog.component.scss'],
})
export class AddJokeDialogComponent implements OnInit {
  public form$: Observable<FormGroup<AddJokeForm>> = this.addJokeFormService.form$;

  public categories: Category[] = Categories;

  constructor(private addJokeFormService: AddJokeFormService, private dialogRef: DynamicDialogRef) {}

  public ngOnInit(): void {
    this.addJokeFormService.buildForm();
  }

  public onSubmit(form: FormGroup<AddJokeForm>): void {
    if (form.invalid) {
      form.markAsDirty();
      return;
    }

    this.dialogRef.close({
      id: Math.random().toString(36).substring(2, 9),
      category: form.value.category!,
      content: form.value.content!,
    } as Joke);
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
