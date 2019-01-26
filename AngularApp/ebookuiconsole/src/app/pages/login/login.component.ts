import { Component, OnInit } from '@angular/core';
import {environment } from '../../../environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuserurl = environment.backend+environment.loginurl;


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(){
    let header = new HttpHeaders();
    header.append('Content-type','application/json');
    console.log(this.loginForm.value);
    this.http.post(this.loginuserurl, this.loginForm.value, {headers: header}).subscribe(response=>{
        let res = JSON.parse(JSON.stringify(response));
        if(res.success){
          this.router.navigate(['/add']);
        } else{
          this.router.navigate(['/login']);
        }  
    });
  }
}
