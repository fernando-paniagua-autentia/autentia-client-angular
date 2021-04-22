import { Component, OnInit } from '@angular/core';
import { Share } from './shares/share';
import { User } from './user/user';
import { UsersService } from './services/users.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'autentia-client-angular';
  nuevoGasto = false;
  nuevoAmigo = false;
  shares: Share[] = [];
  users: User[] = [];

  constructor(
    private dataService:DataService,
    private usersService:UsersService) {}

  public showGastoCard(){
    this.nuevoGasto = !this.nuevoGasto;
  }
  
  public showAmigoCard(){
    this.nuevoAmigo = !this.nuevoAmigo;
  }

  ngOnInit(): void {
    this.cargarGastos();
    this.cargarUsuarios();
  }

  async cargarGastos(): Promise<void> {
    this.shares = await this.dataService.getSharesByID("1");
  }

  async cargarUsuarios(): Promise<void> {
    this.users = await this.usersService.getUsers();
  }
}
