import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueNumberComponent } from './queue-number.component';

describe('QueueNumberComponent', () => {
  let component: QueueNumberComponent;
  let fixture: ComponentFixture<QueueNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
