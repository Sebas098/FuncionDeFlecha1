function validarUsario(usuario,contraseñaUno,contraseñaDos){
    if (contraseñaUno.length<8 &&contraseñaUno!=contraseñaDos){
        return "Vuelva A intentarlo"
    }else if (contraseñaUno!=contraseñaDos){
        return "Vuelve a Intentarlo"
     }   else{
         return "Bienvenido"
    }
     
       

let resultado=validarUsario("Sebas","admin123","admin123")
console.log(resultado)
}