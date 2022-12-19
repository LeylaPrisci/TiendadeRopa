function validar(){
    var nombre, apellido, telefono, email, msj, expresion;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    telefono = document.getElementById("Telefono").value;
    email= document.getElementById("Email").value;
    msj= document.getElementById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === ""|| apellido ===""|| telefono ===""|| email ===""||msj ===""){
        alert("El campo esta vacio");
        return false;
    }else if(nombre.length>30){
        alert("El nombre es largo");
        return false;
    }else if(apellido.length >80){
        alert("El apellido es muy largo");
        return false;
    }else if(telefono.length>10){
        alert("El numero telefonico es muy largo");
        return false
    }else if(email.length>100){
        alert("El email es muy largo");
        return false;
    }
    else if(!expresion.test(email)){
        alert("La expresion del correo no es valida");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El telefono ingresado no es numero");
        return false;
    }
}