import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user.interface';
import {UserService} from '../../services/user.service';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  userId = '';
  error = false;
  success = false;

  loginForm: FormGroup;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly changeDetector: ChangeDetectorRef) {
    this.loginForm = this.formBuilder.group({
      userId: ['']
    });
  }

  login() {
    const id = this.loginForm.get('userId')?.value;
    this.error = false;
    this.success = false;

    this.userService.getUserById(id).pipe(take(1), takeUntil(this.destroy$)).subscribe((user: User) => {
      this.success = true;
      void this.router.navigate(['/user']);
      window.localStorage.setItem('currentUser', JSON.stringify(user));
    }, (error) => {
      // TODO: use catchError here better
      this.error = true;
      this.changeDetector.markForCheck();
      console.error('Error:', error);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
