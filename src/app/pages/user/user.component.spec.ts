import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {UserComponent} from './user.component';
import {UserRole} from 'src/app/enums/role.enum';

describe('LoginComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call onRoleSelect method and set selectedRole', () => {
    component.onRoleSelect(UserRole.Admin);
    expect(component.selectedRole).toEqual(UserRole.Admin);
  });

  it('should call logout method and clear local storage', () => {
    component.logout();
    expect(window.localStorage.length).toEqual(0);
  });
});
