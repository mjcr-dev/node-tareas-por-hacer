const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let hacer = porHacer.crear(argv.descripcion);
        let comp = "";
        if (hacer.completado)
            comp = "V Hecho".yellow;
        else
            comp = "X Sin hacer".red;

        if (hacer)
            console.log(`Tarea ${ hacer.descripcion.yellow } creada con éxito. Estado: ${ comp }`);
        else
            console.log(`Error al crear la tarea ${ hacer.descripcion }`);

        break;

    case 'listar':

        let listado = porHacer.getListado();
        let estado = "";
        console.log("======= Listado por hacer =======".green);

        for (let tarea of listado) {
            console.log(tarea.descripcion.yellow);
            if (tarea.completado)
                estado = "V Hecho".yellow;
            else
                estado = "X Sin hacer".red;

            console.log("Estado:".green, estado);
            console.log("==================================".green);
        }

        break;

    case 'actualizar':

        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        let estadoAct = "";

        if (argv.completado)
            estadoAct = "Hecho".green;
        else
            estadoAct = "Sin hacer".red;

        console.log(`Tarea ${ argv.descripcion.yellow } actualizada a ${ estadoAct }`);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado)
            console.log(`Tarea ${ argv.descripcion.yellow } borrada con éxito`);
        else
            console.log(`Error al borrar la tarea ${ argv.descripcion.yellow }`);

        break;

    default:
        console.log("Comando no reconocido");
}