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
  user: any;
  authTrue = false;
  ngOnInit() {
    this.user = this.storage.get('user');
    if (this.user.status === true) {
      this.authTrue = true;
    }
  }

  logOut() {
    this.user.status = false;
    this.storage.set('user', this.user);
    window.location.href = '/login';
  }

}
