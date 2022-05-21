import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildComponent } from './grandchild.component';

describe('GrandchildComponent', () => {
  let component: GrandchildComponent;
  let fixture: ComponentFixture<GrandchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
