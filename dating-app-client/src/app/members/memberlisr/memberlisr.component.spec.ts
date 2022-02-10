import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlisrComponent } from './memberlisr.component';

describe('MemberlisrComponent', () => {
  let component: MemberlisrComponent;
  let fixture: ComponentFixture<MemberlisrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberlisrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
