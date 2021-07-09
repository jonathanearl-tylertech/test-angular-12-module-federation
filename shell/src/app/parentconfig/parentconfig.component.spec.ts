import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentconfigComponent } from './parentconfig.component';

describe('ParentconfigComponent', () => {
  let component: ParentconfigComponent;
  let fixture: ComponentFixture<ParentconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
