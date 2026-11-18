import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeManagementFilterComponent } from './recipe-management-filter.component';

describe('RecipeManagementFilterComponent', () => {
  let component: RecipeManagementFilterComponent;
  let fixture: ComponentFixture<RecipeManagementFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeManagementFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeManagementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
