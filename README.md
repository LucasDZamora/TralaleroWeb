# Proyecto: Proyecto Aplicación Ionic + Angular

## Presentado por:
- Patricio Figueroa  
- Marcelo Flores  
- Kavon Kermani  
- Gabriel Sanzana  
- Lucas Zamora  

---

## Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Prototipo de diseño](#prototipo-de-diseño)
4. [Librerías usadas con Angular](#librerías-usadas-con-angular)
5. [Tecnologías](#tecnologías)
6. [Instalación](#instalación)

---

## Resumen del Proyecto

Este proyecto es una página similar a Solotodo o Knasta, que permite visualizar el historial de precios de productos y notificar al usuario cuando el precio alcanza un mínimo histórico. La aplicación está diseñada para ayudar a los usuarios a tomar decisiones de compra más informadas, proporcionando información detallada sobre las fluctuaciones de precios a lo largo del tiempo.

Los usuarios pueden buscar productos, ver su historial de precios y agregar o eliminar artículos a una lista personalizada, desde la cual pueden recibir notificaciones cuando el precio de un producto de su interés alcance un valor mínimo preestablecido. Además, la plataforma ofrece la posibilidad de visualizar reseñas de otros usuarios sobre los productos y las tiendas, lo que facilita la comparación entre diferentes opciones.

El sistema está dividido en varias secciones clave, incluyendo búsqueda de productos, categorías, y tiendas, lo que permite a los usuarios navegar de manera eficiente por el catálogo. Los administradores tienen la capacidad de gestionar los productos, incluyendo la adición y eliminación de artículos del inventario, lo que garantiza que el catálogo se mantenga actualizado y relevante.

El objetivo de este proyecto es proporcionar una herramienta útil y accesible que ayude a los usuarios a monitorear los precios de productos y aprovechar las mejores ofertas posibles, todo a través de una interfaz fácil de usar y adaptada tanto para dispositivos móviles como de escritorio.

---

## Requerimientos

### Roles del Sistema
- **Administrador**: Control total sobre el sistema.
- **Usuario**: Puede buscar productos, ver el historial de precios, agregar o eliminar productos de su lista, reseñar productos, y ver las reseñas de tiendas.

---

### Requerimientos Funcionales por Rol

#### Rol - Administrador

- **RF-ADM-01:** El administrador puede registrar nuevos productos.
- **RF-ADM-02:** El administrador puede editar cualquier producto existente.
- **RF-ADM-03:** El administrador puede eliminar productos del inventario (borrado lógico).
  
#### Rol - Usuario

- **RF-USR-01:** El usuario puede buscar productos mediante una barra de búsqueda que estará disponible en la parte superior de todas las páginas.
- **RF-USR-02:** El usuario puede agregar o eliminar productos de su lista.
- **RF-USR-03:** El usuario puede reseñar los productos para ayudar a otros usuarios a tomar decisiones informadas.
- **RF-USR-04:** El sistema debe notificar al usuario cuando el precio de un producto llegue a su mínimo histórico.
- **RF-USR-05:** El usuario podrá visualizar el historial de precios de los productos seleccionados.
- **RF-USR-06:** El usuario podrá visualizar las tiendas cargadas en la página para conocer sus opiniones de otros usuarios.
- **RF-USR-07:** El usuario puede ver las reseñas de los productos de una tienda al seleccionar una tienda específica. 

---

### Requerimientos No Funcionales

- **RNF-01: Tiempo de respuesta**  
  - El sistema debe responder a las búsquedas en menos de **2 segundos** en el 95% de los casos.

- **RNF-02: Seguridad**  
  - Todos los datos del usuario deben ser almacenados de forma segura.
  
- **RNF-03: Usabilidad**  
  - La interfaz debe ser intuitiva y fácil de usar.
  - Compatible con pantallas móviles y escritorio (responsive design).
  
- **RNF-04: Compatibilidad**
  - Compatible con los navegadores:
    - Google Chrome
    - Mozilla Firefox
    - Microsoft Edge
    - Opera
    - Brave
  
- **RNF-05: Escalabilidad**  
  - El sistema debe ser capaz de manejar un creciente número de productos y usuarios sin perder rendimiento.

---

## Prototipo de diseño  
Puedes ver los prototipos completos en [Figma](https://www.figma.com/design/P5ZCkmvzJPXbf0Q4MrjiHx/Dise%C3%B1oprototipos?node-id=0-1&t=yTsY3fzxhUPc6GON-1)

---

## Librerías usadas con Angular
- Bootstrap

---

## Tecnologías
- **Ionic Framework**  
- **Angular**  
- **TypeScript**  
- **Angular Router**  

---

## Instalación

Para correr este proyecto en tu máquina local, sigue los siguientes pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/LucasDZamora/TralaleroWeb.git
2. Navega al directorio del proyecto
   ```bash
    cd TraleroWeb
3. Instala las dependencias
   ```bash
    npm install
4. Corre la aplicación
   ```bash
    ionic serve
