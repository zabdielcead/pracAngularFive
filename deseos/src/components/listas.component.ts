import { Component, Input } from "@angular/core";
import { DeseosService } from '../services/deseo.service';
import { NavController } from 'ionic-angular';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar.component';
@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent{
    
    @Input() terminada: boolean = false; 

    constructor(public deseosService:DeseosService, private navCtrl:NavController) {

    }
   
    listaSeleccionada(lista: Lista) {
        console.log(lista);
        this.navCtrl.push( AgregarPage, {
            titulo: lista.titulo,
            lista:lista
        });

    }
    borrarLista(lista: Lista){
        this.deseosService.borrarLista(lista);
    }
} 
