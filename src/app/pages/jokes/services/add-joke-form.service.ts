import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddJokeForm } from '@jokes/models/add-joke-form.model';

@Injectable({ providedIn: 'root' })
export class AddJokeFormService {
  private fb: FormBuilder = inject(UntypedFormBuilder);

  private form!: FormGroup<AddJokeForm>;
  private _form$: BehaviorSubject<FormGroup<AddJokeForm>> = new BehaviorSubject<FormGroup<AddJokeForm>>(this.form);

  public buildForm(): void {
    this.form = this.fb.group({
      category: ['', [Validators.required]],
      content: ['', [Validators.required]],
    }) as FormGroup<AddJokeForm>;

    this._form$.next(this.form);
  }

  public get form$(): Observable<FormGroup<AddJokeForm>> {
    return this._form$.asObservable();
  }
}
