import { TestBed, async, ComponentFixture, fakeAsync, tick  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { routes } from './app-routing.module';
import { UserdetailComponent } from './users/userdetail/userdetail.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      declarations: [
        AppComponent,
        UsersComponent,
        UserdetailComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it('navigate to "" redirects you to /users', fakeAsync(() => { 
    router.navigate(['']); 
    tick(); 
    expect(location.path()).toBe('/users'); 
  }));


  it('navigate to "users" takes you to /users', fakeAsync(() => { 
    router.navigate(['users']); 
    tick(); 
    expect(location.path()).toBe('/users'); 
  }));


  it('navigate to "users/1" takes you to /users/1 page (User details page)', fakeAsync(() => { 
    router.navigate(['users/1']); 
    tick(); 
    expect(location.path()).toBe('/users/1'); 
  }));


});
