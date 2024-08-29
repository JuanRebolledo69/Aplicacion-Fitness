import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegKcalsPage } from './seg-kcals.page';

describe('SegKcalsPage', () => {
  let component: SegKcalsPage;
  let fixture: ComponentFixture<SegKcalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegKcalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
