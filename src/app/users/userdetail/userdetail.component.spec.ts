import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailComponent } from './userdetail.component';

// import { ActivatedRoute } from '@angular/router';

// import { MockActivatedRoute } from '../../mocks/activated-route';

describe('UserdetailComponent', () => {
  let component: UserdetailComponent;
  let fixture: ComponentFixture<UserdetailComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailComponent ],
      
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeFalsy();
  });
});
