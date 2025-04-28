
arr_usu = [];
arr_pas = [];

function regi(){


    let usur = document.getElementById("usur").value;
    let pasr = document.getElementById("pasr").value;
    let nom = document.getElementById("nom").value;
    let tipd = document.getElementById("tipd").value;
    let ndoc = document.getElementById("ndoc").value;
    let ncel = document.getElementById("ncel").value;

    alert(usur + pasr + nom + ndoc + tipd + ncel);

    arr_usu.push(usur);
    arr_pas.push(pasr);

    //mostrar el array en un texto
    /*document.getElementById("resul").textContent = "Array: " + arr_usu.join(", ");
    document.getElementById("resul1").textContent = "Array: " + arr_pas.join(", ");*/

    //limpiar el imput una vez echa la logica
    document.getElementById("usur").value = "";
    document.getElementById("pasr").value = "";

    alert(arr_usu);

    location.href ="transferencia.html";
    

    alert ("registro guardado");
}



function ingre(){

   let usu = document.getElementById("usu").value;
   let pas = document.getElementById("pas").value;

   /*alert(arr_usu);

    let bus = arr_usu.indexOf(usu);

    if (bus !== -1) {
        alert(bus);
    } else {
       alert("El valor no está en el array.");
    }*/

   
   arr_usu = ['jeferson avila', 'viviana lasso', 'gonzalo bustos'];
   arr_pas = ['12', '24', '48'];


    if( usu === arr_usu[0] && pas === arr_pas[0]){

        alert("Bienvenido " + usu);
        location.href ="transferencia_pri.html";

    }
    else
        alert ("usuario o contrasena invalido");

}


function campos(value){

    if( value== "retiros"){
        document.getElementById("retiros").style.display = "block";
        document.getElementById("consignaciones").style.display = "none";
        document.getElementById("informacion_cuenta").style.display = "none";

    }
    else if(value == "consignaciones"){
        document.getElementById("retiros").style.display = "none";
        document.getElementById("consignaciones").style.display = "block";
        document.getElementById("informacion_cuenta").style.display = "none";
    }
    else if(value == "informacion_cuenta"){
        document.getElementById("retiros").style.display = "none";
        document.getElementById("consignaciones").style.display = "none";
        document.getElementById("informacion_cuenta").style.display = "block";
    }



}


function salir(){
    
    alert("gracias, vuelva prontos");
    location.href ="transferencia.html";
    
}


function cong(){
    val = document.getElementById("val").value;


    sal = document.getElementById("sal").value;

    

    cosco = document.getElementById("cosco").value;

 

    tot = (parseInt(sal) + parseInt(val)) - parseInt(cosco) ;
    
    document.getElementById("sal").value = tot;

    
    document.getElementById("val").value = "";

    alert("Consignaste "+ val + " pesos")

}


function reti(){


    sal = document.getElementById("sal").value;

    ret = document.getElementById("ret").value;

    cosre = document.getElementById("cosre").value;

    rettot = parseInt(ret) + parseInt(cosre);

    if (rettot <= sal){
       
        tot = (parseInt(sal) - parseInt(ret)) - parseInt(cosre);
        
        document.getElementById("sal").value = tot;

        document.getElementById("ret").value = "";

        alert("retiraste "+ ret + " pesos")
 
    }
    else

    alert ("El retiro es mayor al saldo actual")

        

}