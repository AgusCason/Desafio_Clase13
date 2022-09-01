const usuario = "" ;
const contraseña = "" ;
const btnR = document.getElementById("btnR").addEventListener("click", registrar) ;
const arrayUsuarios = [""] ;
const arrayContraseñas = [""] ;
const datosUsuarios = [""] ;



function registrar() {
    const nombre = document.getElementById("nombre").value.toLowerCase() ;
    const apellido = document.getElementById("apellido").value.toLowerCase() ;
    const nomususario = document.getElementById("nomususario").value.toLowerCase() ;
    const email = document.getElementById("email").value.toLowerCase() ;
    const nuevcontraseña = document.getElementById("nuevcontraseña").value.toLowerCase() ;
    const repetcontraseña = document.getElementById("repetcontraseña").value.toLowerCase() ;
    const checkNomUsuario = arrayUsuarios.some( arrayUsuarios => arrayUsuarios  === nomususario ) ;
    const checkEmail = datosUsuarios.some( datosUsuarios => datosUsuarios  === email ) ;
    
    guardarDatosLS() ;
    guardarDatos() ;


    //checkEmail === false ? ( checkNomUsuario === false ? (arrayUsuarios.push(nomususario) , nuevcontraseña === repetcontraseña ? (arrayContraseñas.push(repetcontraseña), console.log("Bienvenid@!", nombre,) ) : console.log("Sus contraseñas no coinciden, vuelva a repetir el paso") ) : console.log("El nombre de usuario ya fue utilizado, porfavor vuelva a ingresar un nuevo usuario") ) : console.log("Ya existe una cuenta registrada a ese mail") ; 

    if( checkEmail === false ){
        if( checkNomUsuario === false ){
            
            arrayUsuarios.push(nomususario);
            if( nuevcontraseña === repetcontraseña ){
                //window.open("sesion.html")
                arrayContraseñas.push(repetcontraseña);
                //console.log("Bienvenid@!", nombre,) ;
                registroExito() ;
            }else{
                //console.log("Sus contraseñas no coinciden, vuelva a repetir el paso") ;
                  Swal.fire({title: 'Sus contraseñas no coinciden',text: "Vuelva a repetir el paso",icon: 'warning',confirmButtonColor: '#3085d6',confirmButtonText: 'Oka'}) ;
            }
        }else{
            //console.log("El nombre de usuario ya fue utilizado, porfavor vuelva a ingresar un nuevo usuario") ;
            Swal.fire({title: 'El nombre de usuario ya fue utilizado',text: "Porfavor vuelva a ingresar un nuevo usuario",icon: 'warning',confirmButtonColor: '#3085d6',confirmButtonText: 'Oka'}) ;
        } 
    }else{
        console.log("Ya existe una cuenta registrada a ese mail") ;
        Swal.fire({title: 'Ya existe una cuenta registrada a ese mail',icon: 'warning',confirmButtonColor: '#3085d6',confirmButtonText: 'Oka'}) ; 
    }
}

function guardarDatosLS(){
    localStorage.setItem("Nombre", nombre.value);
    localStorage.setItem("Apellido", apellido.value);
    localStorage.setItem("Usuario", nomususario.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Contraseña", repetcontraseña.value);
}

function    guardarDatos(){
    if( nombre.value != "" && apellido.value != "" && nomususario.value != "" && email.value != "" && repetcontraseña.value != "" ){
        datosUsuarios.push(new DatosUsuarios(nombre.value, apellido.value, nomususario.value, email.value, repetcontraseña.value)) ;
        localStorage.setItem("DatosUsuarios", JSON.stringify(datosUsuarios)) ;
        const arrayUsuarios = nomususario.value;
        localStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios)) ;
        const arrayContraseñas = repetcontraseña.value;
        localStorage.setItem("arrayContraseñas", JSON.stringify(arrayContraseñas)) ;
    }
}

const registroExito = () => {
    Swal.fire({title: 'Bienvenid@!',text: "Se ah registrado con exito!",icon: 'success',confirmButtonColor: '#3085d6',confirmButtonText: 'Oka'}) ;
}