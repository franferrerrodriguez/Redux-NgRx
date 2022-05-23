import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressEgressComponent } from './ingress-egress.component';

describe('IngressEgressComponent', () => {
  let component: IngressEgressComponent;
  let fixture: ComponentFixture<IngressEgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngressEgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressEgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
