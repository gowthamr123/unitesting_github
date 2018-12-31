import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  id: number;
  user: any;
  noUserFoundMsg : string = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.user = this.dataService.getUser(this.id);
          if(this.user == '') {
            this.noUserFoundMsg = 'No user found';
          }
          
        
        }
      );
  }

}
