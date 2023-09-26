import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user.interface';
import {UserRole} from '../../enums/role.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  user: User = {} as User;
  selectedRole: UserRole | undefined;

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const currentUser = window.localStorage.getItem('currentUser');
    if (currentUser) {
      this.user = this.parse(currentUser);
    }

    const storedRole = window.localStorage.getItem('selectedRole');
    if (storedRole) {
      this.selectedRole = this.parse(storedRole);
    }
  }

  onRoleSelect(selectedRole: UserRole): void {
    this.selectedRole = selectedRole;
    window.localStorage.setItem('selectedRole', JSON.stringify(selectedRole));
  }

  logout(): void {
    window.localStorage.clear();
    void this.router.navigate(['/']);
  }

  private parse(json: string) {
    try {
      return JSON.parse(json);
    } catch (e) {
      return e;
    }
  }

}
