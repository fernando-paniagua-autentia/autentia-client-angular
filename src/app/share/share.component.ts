import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent implements OnInit {
  @Output()
  created = new EventEmitter<void>()

  idPropietario : number = 0;
  idUsuario: number = 0;
  importe: number = 0;
  descripcion : string = "";
  fecha : string = "";
  usuario : any;
  saldo: number = 0;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {  }

  public createShare(){
    const data = {
      idPropietario: this.idPropietario,
      idUsuario: this.idUsuario,
      importe: this.importe,
      descripcion: this.descripcion,
      fecha: this.fecha,
      usuario: this.usuario
    };

    this.dataService.createShare(data)
      .subscribe(
        response => {
          this.created.emit()
        });
  }
}