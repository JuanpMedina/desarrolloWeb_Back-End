// VAR, LET CONST

/*
if (12>11){
    let nombre = "udem"
    console.log(nombre)
}
console.log(nombre);
*/

const fx_imprimir = ()=>{
    console.log("Hoa Mundo");
}

const ejecutar = (nombreFuncion, funcion)=>{
    console.log("Ejecitar la funcion " + nombreFuncion);
    console.log();
    funcion()

}

ejecutar("funcion de imprimir", fx_imprimir)
ejecutar("Impresion 2", ()=>{
    console.log("Hola mundo impresion 2");
})

