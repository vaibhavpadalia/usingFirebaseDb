import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.less']
})
export class DisplayDataComponent implements OnInit {
  data: any = [];
  display: any = [];
  constructor(private service: UserService) {
       this.service.getData().subscribe(response => {
         this.data = Object.values(response.json());
         console.log(this.data);
       });
   }

  ngOnInit() {
  }

}
