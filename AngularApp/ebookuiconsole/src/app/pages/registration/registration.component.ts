import { Component, OnInit } from '@angular/core';
import {environment } from '../../../environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  createuserurl = environment.backend+environment.registrationurl;
  useraddsucess:boolean = false;
  useraddsucessmsg:string = "";
  
  constructor(private http: HttpClient) { }

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  createUserSubmit(){
    //this.userForm.
    let header = new HttpHeaders();
    header.append('Content-type','application/json');
    this.http.post(this.createuserurl,this.userForm.value,{headers: header}).subscribe(response=>{
        this.useraddsucessmsg="User is successfully inserted";
        console.log(this.useraddsucessmsg);
        this.useraddsucess = true;
        setTimeout(() => {
          this.useraddsucess= false;
        }, 3000);
    });
  }

}
