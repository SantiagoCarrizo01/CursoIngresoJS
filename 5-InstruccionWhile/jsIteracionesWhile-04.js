/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado =prompt("Ingrese un numero entre 0 y 10");

	while (!(numeroIngresado <=10 && numeroIngresado >= 0)){
	numeroIngresado = prompt("ingrese un numero entre 0 y 10");
	console.log("El numero ingresado supera el 0 y 10");
	break;
	}

	
}//FIN DE LA FUNCIÓN