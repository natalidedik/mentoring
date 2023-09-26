import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of, throwError} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, UserService, Router],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should call login method and set success to true on successful login', () => {
    spyOn(component.loginForm, 'get').and.returnValue({value: '1'} as AbstractControl);
    spyOn(userService, 'getUserById').and.returnValue(of({}));

    component.login();

    expect(component.success).toBeTruthy();
  });

  it('should call login method and set error to true on login error', () => {
    spyOn(component.loginForm, 'get').and.returnValue({value: '1'} as AbstractControl);
    spyOn(userService, 'getUserById').and.returnValue(throwError({}));

    component.login();

    expect(component.error).toBeTruthy();
  });

  it('should unsubscribe from userSubscription on ngOnDestroy', () => {
    spyOn(component.userSubscription, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.userSubscription.unsubscribe).toHaveBeenCalled();
  });
});
