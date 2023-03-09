import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesViewComponent } from './jokes-view.component';

describe('JokesViewComponent', () => {
  let component: JokesViewComponent;
  let fixture: ComponentFixture<JokesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
