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
        
        if(this.navParmas.get('lista')){
            this.lista = this.navParmas.get('lista');
        }else{
            this.lista = new Lista(this.navParmas.get('titulo'));
            this.deseosService.agregarLista(this.lista);
        }

       
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
        this.deseosService.guardarStorage();
        this.nombreItem = '';
    }
    actualizarTarea(item: ListaItem){
        item.completado = ! item.completado;

        const pendientes = this.lista.items.filter( itemData => {
            return !itemData.completado;
        }).length;

        if(pendientes === 0 ){
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else{
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

        this.deseosService.guardarStorage();
    }
    borrar(idx: number){
        this.lista.items.splice(idx,1);
        this.deseosService.guardarStorage();
    }
}
