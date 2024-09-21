import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  //ngif = true || false
  imageWidth:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=""

  muestImg():void{
    this.muestraImg=!this.muestraImg;
  }
 
 
  productos:IProductos[]=[
    {
      "productoID":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":30000,
      "Year":"9 de agosto 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "imgenURL":"https://th.bing.com/th/id/OIP.lq9e_8tuE95CAwlsh_TFJQHaEK?rs=1&pid=ImgDetMain",
    },
    {
      "productoID":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio":20000,
      "Year":"7 de marzo 2022",
      "Marca":"AUDI",
      "Color":"Blanco",
      "imgenURL":"https://th.bing.com/th/id/OIP.fhwoITXEzZUp_GDQc0-CTwHaFj?rs=1&pid=ImgDetMain",
    },
    {
      "productoID":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":"5 de julio 2020",
      "Marca":"KIA",
      "Color":"Azul",
      "imgenURL":"https://th.bing.com/th/id/OIP.YQLpIK8yqOPw-CHiYPFRVQHaEA?rs=1&pid=ImgDetMain",
    },
   
   
  ]  

}


 

 
