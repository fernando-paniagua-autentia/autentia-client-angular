import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user/user';
import { Id } from '../types/Id';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input()
  users: User[] = [];

  @Output()
  changed = new EventEmitter<string>()

  public onChangeUser(userId:Id){
    this.changed.emit(userId)
  }
}
