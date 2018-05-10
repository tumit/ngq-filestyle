import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgqFilestyleComponent } from './ngq-filestyle.component';

describe('NgqFilestyleComponent', () => {
  let component: NgqFilestyleComponent;
  let fixture: ComponentFixture<NgqFilestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgqFilestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgqFilestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
