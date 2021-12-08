**Proyecto en desarrollo por Eduardo Gramajo para el curso de React JS de CoderHouse**

# *Entrega final de React Comision 16975:*

**NOMBRE:**
Eduardo

**APELLIDO:**
 Gramajo

 ------------------------------------

# ALCHEMIST STORE 
Somos una web dedicada a la venta de figuras de colección. 

Contamos con un amplio catálogo. 

**Trabajamos las siguientes marcas:**

- Bandai
- Kotobukiya
- Banpresto
- Mcfarlane
____________________________________________________

## Recorrido Rápido por el Sitio:
![Imagen](public/giphy.gif)

---------------------------------------

# **La  navegacion incluye:**
**_Home:_**

Incluye las cards con todos los productos.

**_Filtrado por categorias:_**

Se puede filtrar por las siguientes categorias: *Diecast* , *PVC* , *Statue* .

**_Filtrado por marcas:_**

Se pueden filtrar por las siguientes marcas : *Bandai* , *Kotobukiya* , *Banpresto* , *Mcfarlane* .

**_Info:_**

Pequeño resumen de quienes somos.

**_Contacto_**

Aca el usurio dispone de un formulario para contactarse con nosotros.

**_Carrito:_**

Un carrito donde se pueden ver todos los productos que "agregaste al carrito".
_______________________________

## **Interfaz del Usuario:**

El usuario puede elegir un producto para ver la descripcion desde el Home o seleccionar la categoria o marca correspondiente para filtrar los productos, y desde ahi añadir el producto al carrito apretando primero en el boton de "VER MAS" y luego en "Agregar al carrito"

En la barra de navegación, en donde esta el icono del carrito muestra la cantidad de productos que el usuario agrega al carrito.

Para que se habilite el botón de agregar al carrito, debe haber al menos un producto seleccionado. No se permite restar unidades inferiores a cero ni tampoco superar el stock disponible. 

Una vez seleccionados los productos a comprar, el botón "Terminar compra" lleva al carrito con el o los productos seleccionados. De querer eliminar alguno, cada uno tiene su propio botón de eliminar. De querer eliminarlos todos, se encuentra el botón "Vaciar carrito", dejando el carrito vacío con el mensaje de aviso de que no hay productos en el carrito, y un botón para volver al home.

No se permite la compra sin productos seleccionados. En el caso de haber agregado productos al carrito, con el fin de terminar la compra, se encuentra el botón de "Realizar compra", que se encuentra deshabilitado por defecto, hasta completar el formulario obligatario, a llenar por el cliente. Dichos datos se guardan en firestore, y una vez realizado este proceso, se vacía el carrito y se le devuelve al usuario un mensaje de agradecimiento, junto con su Id de compra y de que esta se ha realizado correctamente.
_______________________________________


# Dependencias agregadas:
React-Bootstrap: [https://react-bootstrap.github.io/]

- React JS (https://reactjs.org/)
- Create React App (https://create-react-app.dev/)
- Estilos con Bootstrap y CSS (https://getbootstrap.com/)
- Ruteo con React Router Dom (https://reactrouter.com/)
- Icons con React-Icons (https://react-icons.github.io/react-icons/)
- La base de datos con Firebase (https://firebase.google.com/)

**Firebase/Backend:**

El backend esta realizado con Firebase.

_______________________________________________________
# *Como descargar y usar el proyecto:*
* ### **Clonar repositorio:**
Clonar el repositorio del Ecommerse a traves del GitHub, del siguiente enlance:

```bash
https://github.com/eduardogramajo/React_page_EduardoGramajo
```

* ### **Instalacion:**
Descomprimir la carpeta y abrirla descomprida en la terminal de Visual Studio Code y luego ingresar el siguiente comando:

```bash
  npm install
```

Para instalar las dependencias necesarias.

* ### **Inicializar el proyecto:**
Por ultimo, una vez que se finaliza de instalar las dependencias necesarias en la terminal del Visual Studio Code ingresar el siguiente comando para abrir el proyecto:


```bash
  npm run start
```
***

# ** Información por defecto, con *`Create React App:`* **


______________________________________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
