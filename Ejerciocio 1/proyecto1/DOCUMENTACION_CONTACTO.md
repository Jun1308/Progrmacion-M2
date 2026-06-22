# Documentación de Actualización: Formulario de Contacto

Esta documentación detalla los cambios realizados en el componente de **Contacto** (`ContactoPage`) de la aplicación Ionic/Angular. El componente fue transformado de una vista estática del desarrollador a un formulario interactivo y dinámico de captura de datos estructurado en tres categorías.

---

## 1. Estructura de Datos (TypeScript)

El archivo controlador [contacto.page.ts](file:///c:/Users/User/OneDrive/Desktop/ionic/proyecto1/src/app/contacto/contacto.page.ts) fue modificado para gestionar el estado del formulario e implementar la lógica de guardado.

### Modelo de Datos (`contactoData`)
Se estructuraron los campos del formulario en un único objeto anidado para mantener la coherencia y facilitar la serialización al momento de enviarlo a un servicio o API:

```typescript
contactoData = {
  direccion: {
    calle: '',         // Calle o Avenida principal (Requerido)
    casa: '',          // Detalles del domicilio (Nro de casa, Edificio, Apto)
    ciudad: '',        // Ciudad (Requerido)
    estado: '',        // Estado / Región (Requerido)
    codigoPostal: ''   // Código postal
  },
  contacto: {
    celular: '',       // Número telefónico móvil (Requerido)
    fijo: '',          // Teléfono de red fija
    correo: ''         // Dirección de correo electrónico (Requerido / Tipo email)
  },
  familiar: {
    nombre: '',        // Nombre completo del familiar de emergencia (Requerido)
    parentesco: '',    // Relación de parentesco (Madre, Padre, etc.) (Requerido)
    telefono: ''       // Teléfono de contacto del familiar (Requerido)
  }
};
```

### Funciones Clave
- **`guardarContacto()`**: Es la función invocada al enviar el formulario (`(ngSubmit)`). 
  - Imprime los datos estructurados en la consola (`console.log`) para su depuración o envío a backend.
  - Inyecta y despliega un `ToastController` configurado para mostrar un mensaje visual temporal confirmando la operación al usuario de forma elegante:
    ```typescript
    const toast = await this.toastController.create({
      message: 'Información de contacto guardada exitosamente',
      duration: 3000,
      position: 'bottom',
      color: 'success',
      buttons: [{ text: 'Cerrar', role: 'cancel' }]
    });
    await toast.present();
    ```

### Iconografía Standalone
Se importó la utilidad `addIcons` de `ionicons` en combinación con iconos específicos para garantizar compatibilidad con la arquitectura Standalone de Ionic 8/Angular 20:
- `homeOutline` / `homeSharp`
- `locationOutline` / `locationSharp`
- `callOutline` / `callSharp`
- `peopleOutline` / `peopleSharp`
- `mailOutline` / `mailSharp`
- `saveOutline` / `saveSharp`

---

## 2. Interfaz de Usuario (HTML)

El archivo de plantilla [contacto.page.html](file:///c:/Users/User/OneDrive/Desktop/ionic/proyecto1/src/app/contacto/contacto.page.html) define el layout responsivo.

### Elementos de Formulario Utilizados
- **`<form>`**: Encapsula todas las secciones del formulario y vincula el método de guardado al evento de envío nativo: `<form (ngSubmit)="guardarContacto()">`.
- **`<ion-card>`**: Agrupa cada sección lógica de información de forma limpia con bordes y sombras suaves.
- **`<ion-input>`**: Define las entradas de texto. Utiliza las directivas de Ionic para un diseño flotante (`labelPlacement="floating"`) y colores consistentes (`color="doctora"`).
- **`<ion-select>` y `<ion-select-option>`**: Permite seleccionar de forma unívoca el parentesco en la sección de contacto familiar mediante un control nativo optimizado para móviles.
- **Bindings Bidireccionales (`[(ngModel)]`)**: Enlaza dinámicamente el valor de los controles del DOM con las propiedades del objeto `contactoData` en tiempo real.

---

## 3. Hoja de Estilos (SCSS)

El archivo [contacto.page.scss](file:///c:/Users/User/OneDrive/Desktop/ionic/proyecto1/src/app/contacto/contacto.page.scss) aplica la estética premium para cumplir con los estándares visuales modernos:

### Clases CSS Principales
- **`.creator-banner`**: Bloque superior del creador rediseñado con un fondo de gradiente lineal en tonos rosa (`var(--ion-color-doctora)` y `--ion-color-doctora-tint`), esquinas redondeadas, sombras proyectadas y un icono de fondo semitransparente. Añade un efecto de elevación al posicionar el cursor (`hover`).
- **`.form-card`**: Tarjetas de formulario con bordes delgados de color temático translúcido y sombras minimalistas.
- **`.custom-input-item`**: Modifica la visualización de los items de lista de Ionic para eliminar líneas redundantes y en su lugar presentar una línea inferior personalizada que cambia de color (`transition: border-color 0.2s`) de rosa claro a rosa sólido cuando el input recibe el foco (`.item-has-focus`).
- **`.submit-btn`**: Botón de acción principal con esquinas redondeadas personalizadas (`border-radius: 12px`), mayor padding para facilitar el toque en pantallas táctiles y una sombra de botón a juego con el tema.

---

## 4. Próximos Pasos para Integración con Servidores
Para conectar esta información a una base de datos o servidor HTTP en el futuro:
1. Inyectar `HttpClient` en el constructor del componente:
   ```typescript
   constructor(private http: HttpClient, ...) {}
   ```
2. Modificar la función `guardarContacto()` para enviar un método `POST`:
   ```typescript
   this.http.post('URL_DE_TU_API/contacto', this.contactoData)
     .subscribe(response => {
       // Lógica del Toast de éxito
     });
   ```
