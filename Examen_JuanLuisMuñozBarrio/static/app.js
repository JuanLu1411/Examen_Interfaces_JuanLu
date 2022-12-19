// Juan Luis Muñoz Barrio

// Ventana modal

function AbrirpantallaSecundaria() {
  document.getElementById('pantalla_secundaria').style.display = 'block';
  document.getElementById('pantalla_principal').style.display = 'none';
}

function CerrarpantallaSecundaria() {
  document.getElementById('pantalla_secundaria').style.display = 'none';
  document.getElementById('pantalla_principal').style.display = 'block';
}


  // enviar datos


    function Enviar(){
        alert('El formulario se subio de manera satisfactoria')
    }

    //Validador

    function validador(){
      var Nombre_Cliente = document.getElementById("Nombre_Cliente");

      if(Nombre_Cliente.value==""){

      alert("El campo  nombre esta vacio");

      }else{
        
      alert('El formulario se ha realizado con éxito')
  }
  }