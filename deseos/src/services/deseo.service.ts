import { Injectable } from "@angular/core";
import { Lista } from '../models';


@Injectable()
export class DeseosService {
    listas:Lista[] = [];

    constructor(){
        console.log('Deseos Service Inicializado');
        const lista1 = new Lista('Recolectar piedras del infinito');
        const lista2 = new Lista('Heroes a vencer');
        this.listas.push(lista1,lista2);
    }
}