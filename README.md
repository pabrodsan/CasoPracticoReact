
# Caso práctico 1. Reac JS

## Descripción
realizar un panel de administración para un ecommerce por lo que necesitamos que realice un formulario de autenticación, al entrar un CRUD de clientes y otro de productos (a ser posible uno mediante JSON y el otro mediante GraphQL).

La información de los productos se captura a través del Mock Graphql y la información de los clientes con Mock API. 
El db.json contiene datos de clientes que han sido generados gracias a Json-generator.

## Tecnologías utilizadas

* React
* axios
* graphql
* apollo/client
* react-bootstrap

## Despliegue de la app

Para instalar las dependecias.

~~~
npm install
~~~

## Desplegar json server

Nos posicionamos en la ruta de la carpeta db del proyecto, y ejecutamos:

~~~
json-server --watch db.json
~~~

## Desplegar graphql-faker

En otro terminal situado en la misma carpeta ejecutamos :

~~~
graphql-faker --open query.sdl
~~~

## Desplegar app web

Ejecutamos el siguiente código, nos dirá que el puerto está en uso y si queremos que lo despliegue en otro, aceptamos.

~~~
npm start
~~~


