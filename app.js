// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= []


function agregarAmigo(){
    amigo=document.getElementById("amigo").value
    if(amigo!=""){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        amigos.push(amigo)
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);
        document.getElementById("amigo").value = "";
    }else{
        alert("Por favor, ingrese un Nombre valido")
    }
}

function sortearAmigo(){
    numero=getRandomIntInclusive();
    document.getElementById("resultado").textContent= "El amigo secreto sorteado es: "+amigos[numero]
}

function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(amigos.length-1);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }