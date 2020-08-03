import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTextComponent } from './box-text.component';

describe('BoxTextComponent', () => {
  let component: BoxTextComponent;
  let fixture: ComponentFixture<BoxTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
