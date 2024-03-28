import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidibarComponent } from './sidibar.component';

describe('SidibarComponent', () => {
  let component: SidibarComponent;
  let fixture: ComponentFixture<SidibarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidibarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
