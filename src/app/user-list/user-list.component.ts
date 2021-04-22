import { Component, Input } from '@angular/core';
import { User } from '../user/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input()
  users: User[] = [];

  constructor(private dataService : DataService) {}

  public onChangeUser(userId:string){
    console.log(userId);
    this.dataService.getSharesByID(userId)
  }
}
