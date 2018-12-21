import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseo.service';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage{
    constructor(public deseosService:DeseosService , private navCtrl:NavController, private alertCtrl:AlertController) {}

  
    agregarLista() {
        //this.navCtrl.push(AgregarPage);
        const alerta = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [
                {
                  text: 'Cancelar',
                 
                },
                {
                  text: 'Agregar',
                  handler: data => {
                    console.log(data);
                    if(data.titulo.length === 0){
                        return;
                    }
                    this.navCtrl.push(AgregarPage,{
                        titulo: data.titulo
                    });

                  }
                }
              ]
        });
        alerta.present();
    }
}
