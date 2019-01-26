import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import {Ebook} from '../ebook';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchbookurl = environment.backend+environment.searchbookurl;
  ebook:Ebook;

  constructor(private http: HttpClient) { }
  

  searchBookForm = new FormGroup({
    title: new FormControl(''),
  });

  ngOnInit() {
  }

  searchBookSubmit(){
    let header = new HttpHeaders();
    header.append('Content-type','application/json');
    this.http.get(this.searchbookurl+this.searchBookForm.get('title').value,{headers: header}).subscribe(response=>{
          this.ebook = JSON.parse(JSON.stringify(response));
     } 
    )
  }

}
