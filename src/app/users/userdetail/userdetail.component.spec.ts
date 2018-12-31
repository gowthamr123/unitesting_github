import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailComponent } from './userdetail.component';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of } from 'rxjs';


// import { ActivatedRoute } from '@angular/router';

// import { MockActivatedRoute } from '../../mocks/activated-route';

describe('UserdetailComponent', () => {
  let component: UserdetailComponent;
  let fixture: ComponentFixture<UserdetailComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailComponent ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: {
          params: of({id: 4})
        }
      } ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if user details are present then it should be displayed', () => {
    
    expect(component.user.name).not.toBeUndefined();
    
  });

  it('if user details are present then No user found message should not be displayed', () => {
    
    expect(component.noUserFoundMsg).toMatch('');
  });

  
  

  //  it('if user details are not present then it should display message "No user found"', () => {
    
  //    expect(component.noUserFoundMsg).toContain('No user found');
  //  });
});
