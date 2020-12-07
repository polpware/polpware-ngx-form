import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEmailComposerComponent } from './ngx-email-composer.component';

describe('NgxEmailComposerComponent', () => {
  let component: NgxEmailComposerComponent;
  let fixture: ComponentFixture<NgxEmailComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEmailComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEmailComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
