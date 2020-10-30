import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url: SafeUrl;
  description: string;
  analyzing = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer){}

  ngOnInit(): void {}

  onAnalyze(): void {
    this.description = '';
    this.analyzing = true;
    this.http.post('http://localhost:3000/', {url: this.url}, {responseType: 'json'}).subscribe((val: {textTranslation: string}) => {
      this.description = val.textTranslation;
      this.analyzing = false;
    });
  }
}
