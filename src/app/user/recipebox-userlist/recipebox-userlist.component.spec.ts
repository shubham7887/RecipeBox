import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeboxUserlistComponent } from './recipebox-userlist.component';

describe('RecipeboxUserlistComponent', () => {
  let component: RecipeboxUserlistComponent;
  let fixture: ComponentFixture<RecipeboxUserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeboxUserlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeboxUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
