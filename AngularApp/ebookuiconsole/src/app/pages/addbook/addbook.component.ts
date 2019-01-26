import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  addBookUrl = environment.backend+environment.addbookurl;
  ebookaddsucess:boolean = false;
  ebookaddsucessmsg:string = "";

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  addBookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    coverimagename: new FormControl(''),
    pdfname: new FormControl(''),
    category: new FormControl('')
  });

  ngOnInit() {

  }

  addBookSubmit(){
    let header = new HttpHeaders();
    header.append('Content-type','application/json');
    console.log(this.addBookForm.value);
    this.http.post(this.addBookUrl,this.addBookForm.value,{headers: header}).subscribe(response=>{
      this.ebookaddsucess= true;
      this.ebookaddsucessmsg = "Ebook is successfully inserted.";
      setTimeout(() => {
        this.ebookaddsucess= false;    
      }, 3000);
    });
  }

}
