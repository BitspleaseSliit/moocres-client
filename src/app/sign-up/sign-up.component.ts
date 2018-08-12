import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../layouts/header/header.component';
import { SampleData } from '../sample-data';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private api: ApiService, private data: SampleData, private com: HeaderComponent, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public profile = {
    name: '',
    email: '',
    password: '',
    status: true,
    learningStyles: {}
  };
  checkPass: '';
  invalid = false;
  error: any;
  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');

    if (this.storage.get('user')) {
      this.profile = this.storage.get('user');
      this.profile.status = true;
    } else {
      this.profile.name = '';
      this.profile.email = '';
      this.profile.password = '';
      this.checkPass = '';
      this.profile.status = true;
    }


  }

  signUp() {
    this.error = null;
    console.log(this.profile, this.checkPass);

    if (this.profile.name === '' || this.profile.email === '' || this.profile.password === '') {
      this.invalid = true;
      return;
    }
    if (this.profile.password && this.profile.password !== this.checkPass) {
      this.invalid = true;
    } else {
      this.api.registerUser(this.profile).subscribe((res: any) => {
        console.log('sign up done', res);
        if (res.success) {
          this.storage.set('user', this.profile);
          this.data.getLoggedIn.emit(true);
          this.router.navigateByUrl('/profile');
          console.log(this.storage.get('user'));
        } else {
          this.error = res.msg;
        }
      });



      // window.location.routerLink = '/profile';
      // this.router.navigateByUrl('/profile');
    }
  }


}
