import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveJokeDialogComponent } from './remove-joke-dialog.component';

describe('RemoveJokeDialogComponent', () => {
  let component: RemoveJokeDialogComponent;
  let fixture: ComponentFixture<RemoveJokeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveJokeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveJokeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
