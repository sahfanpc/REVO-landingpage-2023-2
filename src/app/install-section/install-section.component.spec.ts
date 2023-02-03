import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallSectionComponent } from './install-section.component';

describe('InstallSectionComponent', () => {
  let component: InstallSectionComponent;
  let fixture: ComponentFixture<InstallSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
