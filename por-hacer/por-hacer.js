const { count } = require('console');
const fs = require('fs'); //requerimos filesystem 

let listadoHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoHacer); //normaliza un string para json
    fs.writeFile("./db/data.json", data, e => { //escribimos el json
        if (e) throw new Error("No se pudo grabar. ", e);
    });

}

const cargarDB = () => {

    try {
        listadoHacer = require('../db/data.json');
    } catch {
        listadoHacer = []; //capturamos el error para que si el json esta vacio inicialice el array vacío y no de error
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoHacer.push(porHacer); //añadiremos el objeto porHacer al array
    guardarDB();

    return porHacer;

}

const getListado = () => {

    cargarDB();

    return listadoHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    }); //creamos un nuevo listado y con filter añadimos todos los datos que no coincidan con la descripcion, que sera la que habremos borrado, se creará un nuevo array sin ese registro

    if (listadoHacer.length === nuevoListado.length) { //si la longitud del nuevo array es igual que el antiguo no habrá realizado ningun cambio, por lo tanto no se habra hecho la operacion y retornamos un false
        return false;
    } else { //si los listados son distintos igualamos el antiguo al nuevo para poder guardarlo en el json y retornamos true
        listadoHacer = nuevoListado;
        guardarDB();
        return true;
    }



}


module.exports = { //exportamos la función para trabajar con ella fuera
    crear,
    getListado,
    actualizar,
    borrar
}