import { Component } from '@angular/core';
import { FormGroup,FormControl, Validator, Validators } from '@angular/forms';
interface Opciones {
  color:string,
  bg:string,
  numero:string,
  multiplicador:number;
}

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  formulario!:FormGroup
  resultado!:string | number;
  valor:string = '';
  valorn:number = 0;
  valormin:number = 0;
  valormax:number = 0;
  valormul:number = 0;
  toletancia:number = 0;
  valorfinal: number = 0;
  color1:string = '';
  color2:string = '';
  color3:string = '';
  color4:string = '';
  bcolor1:string = '';
  bcolor2:string = '';
  bcolor3:string = '';
  bcolor4:string = '';
  colores: Opciones[] = [
    { "color": "Negro", "bg": "black", "numero": "0", "multiplicador": 1 },
    { "color": "Cafe", "bg": "brown", "numero": "1", "multiplicador": 10 },
    { "color": "Rojo", "bg": "red", "numero": "2", "multiplicador": 100 },
    { "color": "Naranja", "bg": "orange", "numero": "3", "multiplicador": 1000 },
    { "color": "Amarillo", "bg": "yellow", "numero": "4", "multiplicador": 10000 },
    { "color": "Verde", "bg": "green", "numero": "5", "multiplicador": 100000 },
    { "color": "Azul", "bg": "blue", "numero": "6", "multiplicador": 1000000 },
    { "color": "Violeta", "bg": "purple", "numero": "7", "multiplicador": 1000000 },
    { "color": "Gris", "bg": "gray", "numero": "8", "multiplicador": 1000000 },
    { "color": "Blanco", "bg": "white", "numero": "9", "multiplicador": 10000000 },
  ];
  constructor(){}
  
  ngOnInit(): void {
    this.formulario = new FormGroup({
      colores1: new FormControl('',Validators.required),
      colores2: new FormControl('', Validators.required),
      colores3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required)
    })
  }
  encontrar(){
    if(this.color1 != ''){
      this.colores.forEach(opcion => {
        if(opcion.color === this.color1){
          this.bcolor1 = opcion.bg;
          this.valor = opcion.numero + this.valor.slice(1);
        }
      });
    }
    if(this.color2 != ''){
      this.colores.forEach(opcion => {
        if(opcion.color === this.color2){
          this.bcolor2 = opcion.bg;
          this.valor = this.valor.charAt(0) + opcion.numero + this.valor.slice(2);
        }
      });
    }
    if(this.color3 != ''){
      this.colores.forEach(opcion => {
        if(opcion.color === this.color3){
          this.bcolor3 = opcion.bg;
          this.valormul = opcion.multiplicador;
        }
      });
    }
    if(this.color4 == 'dorado'){
      this.bcolor4 = 'gold';
      this.toletancia = 0.05;
    }else if(this.color4 == 'plata'){
      this.bcolor4 = '#C0C0C0';
      this.toletancia = 0.10;
    }
    this.valorn = parseInt(this.valor)
    this.valorfinal = (this.valorn * this.valormul);
    this.valormin = this.valorfinal - (this.valorfinal * this.toletancia)
    this.valormax = this.valorfinal + (this.valorfinal * this.toletancia)

  }
}


