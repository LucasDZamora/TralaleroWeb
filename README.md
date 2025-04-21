# Proyecto: Proyecto Aplicación Ionic + Angular

## Integrantes

- Patricio Figueroa  
- Marcelo Flores  
- Kavon Kermani  
- Gabriel Sanzana  
- Lucas Zamora  

---

## Descripción

Este proyecto es una página similar a Solotodo o Knasta, que permite visualizar el historial de precios de productos y notifica al usuario cuando el precio alcanza un mínimo histórico. 

La página está compuesta por **4 secciones principales**:

- **Inicio (Home):** Página por defecto.
- **Búsqueda:** Accesible mediante el ícono de lupa en el encabezado.
- **Categorías:** Accesible desde la barra de navegación.
- **Tiendas:** Accesible desde la barra de navegación.

---

## Usuarios del sistema

- **Usuario:** Puede buscar productos, ver el historial de precios, agregar o eliminar productos de su lista de seguimiento, reseñar productos, y ver las reseñas de tiendas.
  
- **Administrador:** Tiene permisos para agregar y eliminar productos del sistema, además de gestionar el catálogo de productos.

---

## Requerimientos Funcionales (RF)

- **El usuario debe poder buscar ítems** mediante una barra de búsqueda que esté disponible en la parte superior de todas las páginas.
- **El usuario puede agregar o eliminar productos** de su lista de seguimiento.
- **El usuario puede reseñar los productos** para ayudar a otros usuarios a tomar decisiones informadas.
- **El sistema debe notificar al usuario** cuando el precio de un producto llegue a su mínimo histórico.
- **El usuario podrá visualizar el historial de precios** de los productos seleccionados.
- **El usuario debe poder buscar tiendas** utilizando la barra de búsqueda para encontrar tiendas específicas.
- **El usuario puede ver las reseñas de las tiendas** al seleccionar una tienda específica. Esto permite al usuario conocer las opiniones de otros sobre las tiendas.
- **El sistema debe actualizar periódicamente los precios** de los productos.
- **El administrador puede agregar productos al sistema.** Esto permite que el administrador añada nuevos productos con su respectiva información.
- **El administrador puede eliminar productos del sistema.** Esto permite que el administrador retire productos que ya no deben ser listados.

---

## Requerimientos No Funcionales (RNF)

- **Tiempo de respuesta:** El sistema debe responder a las búsquedas en menos de 2 segundos.
- **Interfaz intuitiva:** La interfaz debe ser fácil de usar y entender para usuarios de diferentes niveles.
- **Adaptabilidad:** La aplicación debe ser completamente funcional tanto en dispositivos móviles como en pantallas de escritorio.
- **Seguridad:** Todos los datos del usuario deben ser almacenados de forma segura.
- **Escalabilidad:** El sistema debe ser capaz de manejar un creciente número de productos y usuarios sin perder rendimiento.

---

## Mockups y UI/UX

Los mockups de la interfaz se han diseñado considerando tanto la versión móvil como la versión web de la aplicación. Se incluyen pantallas para la navegación principal, la búsqueda de productos, etc. Además, los formularios de inicio de sesión y registro están diseñados con los campos requeridos:

1. Nombre de usuario
2. RUT
3. Correo Electrónico
4. Región
5. Comuna
6. Contraseña
7. Confirmación de Contraseña
8. Aceptación de términos y condiciones

Puedes ver los prototipos completos en [Figma](https://www.figma.com/design/27nvS768OmbEAa1kWNkBae/Solotodo?node-id=218-10834&t=Q1tA8qiBHgqHZT0g-1).

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

