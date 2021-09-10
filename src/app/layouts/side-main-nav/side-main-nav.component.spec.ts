import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMainNavComponent } from './side-main-nav.component';

describe('SideMainNavComponent', () => {
  let component: SideMainNavComponent;
  let fixture: ComponentFixture<SideMainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMainNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
