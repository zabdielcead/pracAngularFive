import { Injectable } from "@angular/core";
import { Lista } from '../models';


@Injectable()
export class DeseosService {
    listas:Lista[] = [];

    constructor(){
        console.log('Deseos Service Inicializado');
        //const lista1 = new Lista('Recolectar piedras del infinito');
        //const lista2 = new Lista('Heroes a vencer');
        //this.listas.push(lista1,lista2);
        this.cargarStorage();
    }

    agregarLista(lista: Lista){
        this.listas.push(lista);
        this.guardarStorage();
    }
    borrarLista(lista: Lista){
        this.listas = this.listas.filter( listaData =>{
            return listaData.id !== lista.id;
        });
        this.guardarStorage();
    }
    guardarStorage(){
        localStorage.setItem('data', JSON.stringify(this.listas));
    }
    cargarStorage(){
        if( localStorage.getItem('data') ){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }else{
            this.listas = [];
        }
    }
}