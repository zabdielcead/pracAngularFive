import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseo.service';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage{


    constructor(public deseosService:DeseosService) {

    }
    listaSeleccionada(lista){
        
    }
} 
