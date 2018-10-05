import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {

  public users: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.refresh();
  }

  refresh(event?: any) {
    console.log('HomePage - Begin async operation');
    this.users = [];
    this.loadMore(event);
  }

  loadMore(event?: any) {
    this.http.get('https://randomuser.me/api/?results=20')
    .subscribe(data => {
      for (const user of data['results']) {
        this.users.push(user);
      }
      if (event) {
        event.target.complete();
      }
    }, err => {
      console.log('Error retrieving users: ', err);
      if (event) {
        event.target.complete();
      }
    });
  }
}
