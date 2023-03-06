## Ringi Phone Store 

***

## Contexto del proyecto

Este proyecto es un comercio online de teléfonos móviles.
El proyecto se ha ido desarrollando siguiendo unos objetivos; la idea es que se pueda seguir avanzando hasta crear un comercio online completo.
Las tareas y ramas creadas se encuentran en el Proyecto y se pueden ir añadiendo "issues".


## Requisitos:

<ul>
<li>La aplicació debe tener dos vistas: una vista principal con un listado de productos y una vista con el detalle del producto</li>
<li>Se deberá seguir la estructura con los diseños proporcionados</li>
<li>El desarrollo debe ser en React.js</li>
<li>La aplicación debe ser una SPA</li>
<li>El proyecto tiene que tener los siguientes scrips:
    1. START - Modo desarrollo
    2. BUILD - Compilación para modo Producción
    3. TEST - Lanzamiento de test
    4. LINT - Comprobación de código
</li>
<li>El proyecto debe presentarse en un repositorio de codigo abierto</li>
</ul>

## 🛠️ Mockup de este proyecto

El diseño del proyecto se ha hecho teniendo en cuenta los requisitos pre-establecidos:
<ul>
<li>En el Header:</li>
<li>tenemos el título de la aplicación que actuará como link a la vista principal</li>
<li>hay un breadcrumbs, mostrando la pagina donde se encuentra el usuario asi
como un link para su navegación.</li>
<li>En la parte derecha de la cabecera, se muestra el número de items que se hayan añadido al carrito</li>
</ul>

***

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/82206421/223005411-76cb88b6-8ffb-4c08-941f-120ef4227fb2.png">

***

Los datos del carrito se guardarán durante 1 hora, posteriormente, los datos se eliminarán.
En el siguiente video se muestra un ejemplo haciendo un test de 30 segundos.
 
***

https://user-images.githubusercontent.com/82206421/223005652-4ab367f5-38f8-418f-98ed-d0aed6a86ff8.mov

***

<li>En la Search bar: </li>
<li>Se mostrará un input al usuario, le permitirá la introdución de una cadena de texto.</li>
<li>El usuario puede filtrar los productos en función del texto introducido, se comparará
con el marca y el modelo de los productos y es en tiempo real.</li>

***
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/82206421/223006127-5e0c88c3-e32a-4b58-b6a5-6fb0a8e7afe2.png">


<li>En el Product Details Page: </li>
<li>La página se divide en 2 columnas.</li>
<li>En la primera se muestra el componente de la imagen del producto.</li>
<li>En la segunda, se muestra los detalles y las acciones del producto.</li>
<li>En las acciones disponemos de 3 filas de botones,</li>
<li>en la primera fila podemos elegir la capacidad del dispositivo (16 G, 120G etc.).</li>
<li>En la segunda fila podemos escoger el color del dispositivo.</li>
<li>Finalmente tenemos el boton de "Add to cart" para añadir el producto al carrito.</li>
<li>En el caso de que el artículo sólo disponga de una posible capacidad o
un posible color, ese botón será pre-seleccionado
</li>
<li>Del mismo modo, si el usuario no ha elegido todas las opciones posibles, no podrá añadir
el producto al carrito de la compra</li>
<li>Finalmente, la vista dispone de un breadcrumb con links para navegar de vuelta a la lista de productos.</li>

***
<img width="1434" alt="image" src="https://user-images.githubusercontent.com/82206421/223006288-9bb6521e-46f6-4d93-bf9f-8052d584038d.png">


## 🛠️ Mockup de este proyecto

El mockup del proyecto se ha realizado siguiendo de la manera más pareja posible a la estructura facilitada.
Se han respetado todos los elementos y se han añadido algunos mensajes de feedback con tal de informar al usuario en el caso de error, de producto no encontrado o de confirmación de la selección del producto, por ejemplo.
El diseño es responsive y se ha pensado para dispositivos de distintos tamaños (desktop, mobile y tablet)

***

<img width="546" alt="image" src="https://user-images.githubusercontent.com/82206421/223006797-d1eadfa2-dcb2-4a71-b3bd-a7e1a689686d.png">

## 🚀 Comenzando

## Install Project

1. Asegúrese de tener instalado node.js
2. Clone git https://github.com/bertali/mobile-store-app.git
3. Ejecute npm install para instalar las dependencias ya disponibles en package-json
((react.js, react-router, react-router-breadcrumbs, tailwind, axios, jest y babel)
4. Ejecute npm start
5. El proyecto dispone de los scripts start, build, test y lint.
6. Para ejecutar los tests escriba "npm run test"

***
<img width="1012" alt="Captura de pantalla 2023-03-04 a las 18 12 42" src="https://user-images.githubusercontent.com/82206421/223006593-5b6ab717-77ba-4279-974f-56e6236c727b.png">


## 🛠️ Herramientas, lenguages y librerías usadas en este proyecto

Para el diseño del mockup se ha usado Figma.

Para dar estilo a las letras se ha usado google font.

Para añadir iconos se ha utilizado heroicons (https://heroicons.com/)

El código se ha desarrollado en Visual Studio Code.

El lenguaje usado ha sido React.js, Javascript, HTML y CSS.

También se han usado librerías de React.js, como React Router y React Breadcrumbs.

Para trabajar con las APIs se ha usado Axios. 

Para dar estilos se ha usado Tailwind. 

Los tests se han ejecutado con Jest.

Se plantea el trabajo como un proyecto mantenible y escalable.

Se han usado metodologías ágiles y clean commits para facilitar el seguimiento del trabajo.

***

<img width="1435" alt="image" src="https://user-images.githubusercontent.com/82206421/223007107-ae2821c7-ad64-4511-a78c-0035f5095f8f.png">

