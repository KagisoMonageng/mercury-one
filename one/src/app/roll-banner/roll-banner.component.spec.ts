import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollBannerComponent } from './roll-banner.component';

describe('RollBannerComponent', () => {
  let component: RollBannerComponent;
  let fixture: ComponentFixture<RollBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollBannerComponent]
    });
    fixture = TestBed.createComponent(RollBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
