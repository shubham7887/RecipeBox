import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbUserdetailComponent } from './rb-userdetail.component';

describe('RbUserdetailComponent', () => {
  let component: RbUserdetailComponent;
  let fixture: ComponentFixture<RbUserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbUserdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbUserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
