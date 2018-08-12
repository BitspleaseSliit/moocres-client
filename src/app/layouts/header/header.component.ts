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
    this.data.getLoggedIn.subscribe(bool => this.authTrue = bool);
    if (this.storage.get('jwt')) {
      this.authTrue = true;
    }
  }

  logOut() {
    this.storage.remove('jwt');
    this.data.getLoggedIn.emit(false);
    this.router.navigateByUrl('/login');
  }

}
