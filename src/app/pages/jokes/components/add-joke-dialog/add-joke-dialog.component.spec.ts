import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJokeDialogComponent } from './add-joke-dialog.component';

describe('AddJokeDialogComponent', () => {
  let component: AddJokeDialogComponent;
  let fixture: ComponentFixture<AddJokeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJokeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJokeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
