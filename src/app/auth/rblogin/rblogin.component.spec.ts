import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbloginComponent } from './rblogin.component';

describe('RbloginComponent', () => {
  let component: RbloginComponent;
  let fixture: ComponentFixture<RbloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
