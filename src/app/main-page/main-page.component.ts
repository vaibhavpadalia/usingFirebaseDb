import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private service: UserService) { }
  ngOnInit() {
  }

  sendData(name: string, email: string, number: string, subject: string, message: string) {
    this.service.storeData(name, email, number, subject, message)
    .subscribe(response => {
      console.log(response);
      alert('Message Sent');
    });
  }

}
