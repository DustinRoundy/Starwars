import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceChangeDialogComponent } from './force-change-dialog.component';

describe('ForceChangeDialogComponent', () => {
  let component: ForceChangeDialogComponent;
  let fixture: ComponentFixture<ForceChangeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceChangeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceChangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
