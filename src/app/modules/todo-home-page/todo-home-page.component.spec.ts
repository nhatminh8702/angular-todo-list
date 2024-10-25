import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHomePageComponent } from './todo-home-page.component';

describe('TodoHomePageComponent', () => {
  let component: TodoHomePageComponent;
  let fixture: ComponentFixture<TodoHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
