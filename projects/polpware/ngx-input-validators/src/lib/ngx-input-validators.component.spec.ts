import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputValidatorsComponent } from './ngx-input-validators.component';

describe('NgxInputValidatorsComponent', () => {
  let component: NgxInputValidatorsComponent;
  let fixture: ComponentFixture<NgxInputValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInputValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
