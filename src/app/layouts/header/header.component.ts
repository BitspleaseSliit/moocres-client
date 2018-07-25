import { Inject, Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { SampleData } from '../../sample-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data: SampleData, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  user: any;
  public authTrue = false;
  ngOnInit() {

    // if (this.storage.get('user')) {
    //   this.user = this.storage.get('user');
    //   if (this.user.status === true) {
    //     this.authTrue = true;
    //   }
    // } else {
    //   this.authTrue = false;
    //   this.user = null;
    // }
    // this.data.getLoggedIn
    this.data.getLoggedIn.subscribe(bool => this.authTrue = bool);
  }

  logOut() {
    this.user = this.storage.get('user');
    this.user.status = false;
    this.storage.set('user', this.user);
    // window.location.routerLink = '/login';
    console.log("this.storage.get('user').status", this.storage.get('user').status);
    this.data.getLoggedIn.emit(false);
    this.router.navigateByUrl('/login');
  }

}
