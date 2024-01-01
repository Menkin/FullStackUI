import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveListComponent } from './executive-list.component';

describe('ExecutiveListComponent', () => {
  let component: ExecutiveListComponent;
  let fixture: ComponentFixture<ExecutiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
