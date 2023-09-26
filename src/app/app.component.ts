import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    const user = window.localStorage.getItem('currentUser');
    if (user != null) {
      void this.router.navigate(['/user']);
    } else {
      void this.router.navigate(['/']);
    }
  }
}
