import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBlogComponent } from './food-blog.component';

describe('FoodBlogComponent', () => {
  let component: FoodBlogComponent;
  let fixture: ComponentFixture<FoodBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
