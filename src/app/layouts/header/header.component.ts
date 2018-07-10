import { Inject, Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  authTrue = false;
  ngOnInit() {
    if (this.storage.get('user').status === true) {
      this.authTrue = true;
    }
  }

  logOut() {
    const user = this.storage.get('user');
    user.status = false;
    this.storage.set('user', user);
    window.location.href = '/login';
  }

}
