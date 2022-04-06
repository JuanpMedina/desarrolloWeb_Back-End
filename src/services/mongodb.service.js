const { MongoClient, ObjectId } = require("mongodb");
// Connection URI
const uri = process.env.URI_MONGODB;
// Create a new MongoClient
const client = new MongoClient(uri);

const conectarDB = async ()=>{
  // Connect the client 
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB)
  return DB;
}

const leerDocumentos = async (nombeColeccion,filtro)=>{
  let db = await conectarDB()
  let coleccion = db.collection(nombeColeccion)
  filtro = filtro ? filtro : {}
  obtenerFiltroId(filtro, null, true)
  return coleccion.find(filtro).toArray()
}

const obtenerFiltroId = (filtro, nuevoDocumento, esConsulta=false) => {
  if (esConsulta ) {
    if (filtro && filtro._id) {
      filtro._id = new ObjectId(filtro._id)
    }
  }else{
    if (filtro && filtro._id){
      filtro._id = new ObjectId(filtro._id)
      if (nuevoDocumento) {
        nuevoDocumento._id = filtro._id
      }
    }else{
      throw new Error ("El id es obligatorio")
    }
  }
}

const agregarDocumento = async (nombreColeccion, informacion) => {
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  return await coleccion.insertOne(informacion)
}

const eliminarDocumento = async (nombreColeccion, filtro) => {
  obtenerFiltroId(filtro)
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  return await coleccion.deleteOne(filtro)
}

const modificarDocumento = async (nombreColeccion, filtro, nuevoDocumento) => {
  obtenerFiltroId(filtro, nuevoDocumento)
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  return await coleccion.replaceOne(filtro, nuevoDocumento)
}
//run().catch(console.dir);
module.exports = {leerDocumentos, agregarDocumento, eliminarDocumento, modificarDocumento}