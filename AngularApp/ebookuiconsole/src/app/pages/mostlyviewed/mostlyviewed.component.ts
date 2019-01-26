import { Component, OnInit } from '@angular/core';
import { environment} from '../../../environments/environment';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-mostlyviewed',
  templateUrl: './mostlyviewed.component.html',
  styleUrls: ['./mostlyviewed.component.css']
})
export class MostlyviewedComponent implements OnInit {

  mostlyviewedurl = environment.backend+environment.mostlyviewed;
  booklist=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let header = new HttpHeaders();
    header.append('Content-type','application/json');
    this.http.get(this.mostlyviewedurl,{headers: header}).subscribe(response=>{
        console.log(JSON.stringify(response));
        let res = JSON.parse(JSON.stringify(response));
        let booklist = [];
        res.forEach( async element => {
         booklist.push(element);  
        });
        this.booklist = booklist.reverse();
    });
  }
}
