# Aplicación To-Do por comandos

Con este ejercicio creado en NodeJS podremos crear una lista de tareas por hacer, visualizar la lista con sus estados, cambiar el estado de cada tarea y/o poder borrarlas.

Las tareas se almacenan en un archivo .json simulando una base de datos.
Se ha utilizado los módulos yargs y color.

Para utilizar esta aplicación deberemos reconstruir los paquetes de node
```
npm install
```

## Ejemplos de uso

Comandos: crear, listar, actualizar y borrar.

### Crear una tarea por hacer
Para crear una tarea utilizaremos el comando _crear_ seguido de la descripción/nombre de la tarea con --descripcion (o -d).

Ejemplo:
```
node app crear -d "Pasear al perro"
```
_En este caso se creará la tarea "Pasear al perro" con el estado por defecto "Sin hacer"_

### Listar tareas creadas
Para listar las tareas que tenemos almacenadas utilizaremos el comando _listar_ sin ningún parámetro.

Ejemplo:
```
node app listar
```
_En este caso se mostrarán todas las tareas que tenemos almacenadas_

### Actualizar estado de una tarea
Para actualizar el estado de una tarea en concreto se utilizará el comando _actualizar_ y pasamos por el parámetro --descripcion (o -d) el nombre de la tarea seguido del parámetro --completado (o -c) con valor _true_ (valor por defecto) para una tarea completada o valor _false_ para una tarea por hacer.

Ejemplo:
```
node app actualizar -d "Pasear al perro" -c
```
_En este caso marcaremos la tarea "Pasear al perro" como realizada (al no pasar valor al parámetro completado por defecto es true)_

### Borrar una tarea
Para borrar una tarea que hayamos creado utilizaremos el comando borrar seguido del parámetro --descripcion (o -d) seguido del nombre de la tarea a borrar.

Ejemplo:
```
node app borrar -d "Pasear al perro"
```
_En este caso borraremos la tarea "Pasear al perro" de la base de datos_
