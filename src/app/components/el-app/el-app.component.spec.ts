import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElAppComponent } from './el-app.component';

describe('ElAppComponent', () => {
  let component: ElAppComponent;
  let fixture: ComponentFixture<ElAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
