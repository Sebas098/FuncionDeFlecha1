/*function validarUsario(usuario,contraseñaUno,contraseñaDos){
    if (contraseñaUno.length<8){
        return "Vuelva A intentarlo"
    }else if (contraseñaUno!=contraseñaDos){
        return "Vuelve a Intentarlo"
     }   else{
         return "Bienvenido"
    }
}
*/

let validarUsario = (usuario,contraseñaUno,contraseñaDos) => {
        if (contraseñaUno.length<8){
        return "Vuelva A intentarlo"
    }else if (contraseñaUno!==contraseñaDos){
        return "Vuelve a Intentarlo"
     }   else{
         return "Bienvenido"
    }
}

     