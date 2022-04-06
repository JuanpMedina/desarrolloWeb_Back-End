const {leerDocumentos,agregarDocumento, modificarDocumento,eliminarDocumento} = require("../services/mongodb.service")

// Controlador de usuarios
/**
 * @param {request} req
 * @param {response} res
 *
*/

const crearUsuario = async (req, res)=>{
    let respuesta={}
    try{
        respuesta.ok=true
        respuesta.message="Usuarios agregado correctamente"
        // Agregar a la base de datos
        let informacion = req.body
        let resultado = await agregarDocumento("usuarios", informacion)
        console.log(resultado)

        respuesta.info= resultado
        res.send(respuesta)

    }catch (error){
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error agregando el usuarios."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

// Controlador de usuarios
/**
 * @param {request} req
 * @param {response} res
 *
*/

const modificarUsuario = async (req, res)=>{
    let respuesta={}
    try{
        let _id = req.params["id"]

        respuesta.ok=true
        respuesta.message="Usuarios modificado correctamente"
        // Agregar a la base de datos
        let informacion = req.body
        let resultado = await modificarDocumento("usuarios",{_id},informacion)
        console.log(resultado)

        respuesta.info= resultado
        res.send(respuesta)

    }catch (error){
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error modificando el usuarios."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

// Controlador de usuarios
/**
 * @param {request} req
 * @param {response} res
 *
*/

const eliminarUsuario = async (req, res)=>{
    let respuesta={}
    try{
        let _id = req.params["id"]

        respuesta.ok=true
        respuesta.message="Usuarios eliminado correctamente"
        // Eliminar usuario a la base de datos
        let resultado = await eliminarDocumento("usuarios",{_id})
        console.log(resultado)

        respuesta.info= resultado
        res.send(respuesta)

    }catch (error){
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error eliminando el usuarios."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

// Controlador de usuarios
/**
 * @param {request} req
 * @param {response} res
 *
*/

const consultarUsuario = async (req, res)=>{
    let respuesta={}
    try{
        let _id = req.params["id"]

        respuesta.ok=true
        respuesta.message="Usuarios consultado correctamente"
        // consultar usuario a la base de datos
        let resultado = await leerDocumentos("usuarios",{_id})
        console.log(resultado)

        respuesta.info= resultado
        res.send(respuesta)

    }catch (error){
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando el usuarios."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}


// Controlador de usuarios
/**
 * @param {request} req
 * @param {response} res
 *
*/

const consultarUsuarios = async (req, res)=>{
    let respuesta={}
    try{
        respuesta.ok=true
        respuesta.message="Usuarios consultando correctamente"
        // Consulta a la base de datos de usuarios
        let resultado = await leerDocumentos("usuarios")
        console.log(resultado)

        respuesta.info= resultado
        res.send(respuesta)

    }catch (error){
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los usuarios."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
    
}

module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}