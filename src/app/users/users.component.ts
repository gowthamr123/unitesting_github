import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getUsers(searchForm: NgForm) {
    this.usersList = this.dataService.getUsersList(searchForm.value.name);
  }

}
