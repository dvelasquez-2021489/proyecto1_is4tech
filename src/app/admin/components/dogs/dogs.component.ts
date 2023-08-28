import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../../services/dogs-service.service';
import { dogs } from '../../interface/dogs-interface';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  contenidoTextarea: string = '';

  public listdePerros: dogs = { message: '', status: '' };
  title: string = '';

  constructor(private DogsServiceService: DogsServiceService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(): void {
    this.DogsServiceService.get().subscribe({
      next: (respuesta: any) => {
        console.log(respuesta);
        this.listdePerros = respuesta;
      }
    });
  }

  public call() {
    this.DogsServiceService.call().subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listdePerros = respuesta;
    });
  }
}
