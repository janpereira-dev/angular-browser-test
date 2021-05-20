import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeHeadersComponent } from './edge-headers.component';

describe('EdgeHeadersComponent', () => {
  let component: EdgeHeadersComponent;
  let fixture: ComponentFixture<EdgeHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
