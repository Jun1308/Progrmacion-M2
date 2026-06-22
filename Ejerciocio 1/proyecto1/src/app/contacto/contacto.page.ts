import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonList, 
  IonItem, 
  IonInput, 
  IonButton, 
  IonIcon, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonSelect, 
  IonSelectOption 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  homeSharp, 
  callOutline, 
  callSharp, 
  peopleOutline, 
  peopleSharp, 
  mailOutline, 
  mailSharp, 
  saveOutline, 
  saveSharp, 
  locationOutline, 
  locationSharp 
} from 'ionicons/icons';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonList, 
    IonItem, 
    IonInput, 
    IonButton, 
    IonIcon, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonSelect, 
    IonSelectOption, 
    CommonModule, 
    FormsModule
  ]
})
export class ContactoPage implements OnInit {
  contactoData = {
    direccion: {
      calle: '',
      casa: '',
      ciudad: '',
      estado: '',
      codigoPostal: ''
    },
    contacto: {
      celular: '',
      fijo: '',
      correo: ''
    },
    familiar: {
      nombre: '',
      parentesco: '',
      telefono: ''
    }
  };

  constructor(private toastController: ToastController) {
    addIcons({ 
      homeOutline, 
      homeSharp, 
      callOutline, 
      callSharp, 
      peopleOutline, 
      peopleSharp, 
      mailOutline, 
      mailSharp, 
      saveOutline, 
      saveSharp, 
      locationOutline, 
      locationSharp 
    });
  }

  ngOnInit() {
  }

  async guardarContacto() {
    console.log('Datos de contacto guardados:', this.contactoData);
    
    const toast = await this.toastController.create({
      message: 'Información de contacto guardada exitosamente',
      duration: 3000,
      position: 'bottom',
      color: 'success',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });
    
    await toast.present();
  }
}
