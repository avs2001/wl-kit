import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChildChildComponent } from './test-child-child.component';

describe('TestChildChildComponent', () => {
  let component: TestChildChildComponent;
  let fixture: ComponentFixture<TestChildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChildChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
