import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCookieComponent } from './verify-cookie.component';

describe('VerifyCookieComponent', () => {
  let component: VerifyCookieComponent;
  let fixture: ComponentFixture<VerifyCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
