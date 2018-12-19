import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseo.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from "ionic-angular";


@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage{
    lista: Lista;
    nombreItem: string = '';
    constructor(public deseosService:DeseosService, private navParmas: NavParams) {
        console.log(this.navParmas.get('titulo'));
        this.lista = new Lista(this.navParmas.get('titulo'));
    }

    listaSeleccionada(lista: Lista) {
        console.log(lista);

    }

    agregarItem(){
        console.log(this.nombreItem.length === 0);

        if(this.nombreItem.length === 0){
            return;
        }
        const nuevoItem= new ListaItem(this.nombreItem);
        this.lista.items.push( nuevoItem );
        this.nombreItem = '';
    }
    actualizarTarea(item: ListaItem){
        item.completado = ! item.completado;
    }
}
