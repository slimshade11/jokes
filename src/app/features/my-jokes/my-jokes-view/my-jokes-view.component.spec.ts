import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJokesViewComponent } from './my-jokes-view.component';

describe('MyJokesViewComponent', () => {
  let component: MyJokesViewComponent;
  let fixture: ComponentFixture<MyJokesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJokesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJokesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
