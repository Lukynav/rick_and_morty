# Rick and Morty Project

Este proyecto es una aplicación web que ofrece información sobre la serie animada "Rick and Morty". La aplicación permite a los usuarios buscar, gaurdar y filtrar personajes.

## Instalación

Para utilizar esta aplicación, es necesario tener instalado Node.js en el equipo. Una vez instalado Node.js, clonar el repositorio y ejecutar los siguientes comandos:

La aplicacion, cuenta con dos carpetas:

- **client**: Dentro de esta carpeta se encuentra la aplicacion de Rick and Morty
- **server**: Esta carpeta contiene la API utilizada en el proyecto

Se deben ejecutar ambos para correr esta aplicacion de forma correcta, por lo que es ncesario que ejecute los siguientes comandos:

ejecuto el server:

```bash
cd server
npm install
npm start
```

Ahora ejecuto la aplicacion

```bash
cd ..
cd client
npm install
npm start

```

Listo, ahora a codear!

## Uso

Una vez que la aplicación esté en funcionamiento, se puede acceder a ella desde el navegador en la dirección http://localhost:3000/. La aplicacion cuenta con la siguientes rutas:

- /
- /home
- /favorites
- /about
- /detail/:id

## Tecnologías utilizadas

Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

- React (create-react-app)
- React Router
- Redux

## Contribuciones

Las contribuciones son bienvenidas. Para hacer una contribución, crear un pull request y se revisará lo antes posible.

## Licencia

Este proyecto está bajo la licencia MIT.
