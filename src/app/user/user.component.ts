import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output()
  created = new EventEmitter<void>()

  id:number=0;
  nombre:string = "";

  constructor(private dataService : DataService) { }

  ngOnInit(): void { }

  public createUser(){
    const data = {
      nombre: this.nombre
    };

    this.dataService.createUser(data)
      .subscribe(
        response => {
          this.created.emit()
        });
  }
}
