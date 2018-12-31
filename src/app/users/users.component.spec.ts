import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [FormsModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if search is valid then it should fetch users', () => {
    const testForm = <NgForm>{
      value: {
          name: "Gowtham"
      }
  };
    component.getUsers(testForm);
    expect(component.usersList.length).toBeGreaterThan(0);
    expect(component.emptyMessage).toEqual('');
  });

  it('if search is valid then it should have a link to user details page', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const testForm = <NgForm>{
      value: {
          name: "Gowtham"
      }
    };
    component.getUsers(testForm);
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    expect(de).not.toBeNull();
  });


  it('if search result is empty then show message "No result to display"', () => {
    const testForm = <NgForm>{
      value: {
          name: "qqqqqq"
      }
  };
    component.getUsers(testForm);
    
    expect(component.emptyMessage).toContain('No result');
    // const message = debugElement.query(By.css('p.emptyMessageText')).nativeElement.innerText;
    
    // expect(message).toContain('');
  });
});
