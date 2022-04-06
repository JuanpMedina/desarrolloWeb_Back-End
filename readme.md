# API Restaurante

> API sobre el restaurante para el proyecto de desarrolo web

```
|
|---src
|-----controllers
|-----routers
|-----services
|-----index.js
|---.gitignore
```
1. controllers: controlar tráfico de información
2. routers: Declarar las rutas
3. services: Servicios que se van a utilizar
4. index.js: inicio del API
5. .gitignore: Ignorar carpetas y/o archivos en el repositorio

## Estructura que retorna los endpoints
```json
{
    "ok":"Boolean",
    "maessage":"String",
    "info":"Object",
}
```


# NOTAS
## Comandos 
- `npm init`: Inicializar el proyecto con el package.json 
- `npm install NOMBRE`: Instalar librerias y frameworks de express 
- `npm install`: Instalar todas las librerias y frameworks de express que esten resgistradas en el package.json
- `npm run dev`: Ejecutar el script que se encuentra en la package.json



## Librerias y frameworks
1. Express: `npm install express --save` framework para crear la API
2. nodemon: `npm i nodemon` Herramienta de desarrollo para recargar auto proyecto