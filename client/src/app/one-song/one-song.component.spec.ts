import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSongComponent } from './one-song.component';

describe('OneSongComponent', () => {
  let component: OneSongComponent;
  let fixture: ComponentFixture<OneSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
