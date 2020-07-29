/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese la Clave");
	
	while(claveIngresada != utn750) { 
		
	claveIngresada = prompt("Error! Ingrese la clave correcta.");
	}
	
}//FIN DE LA FUNCIÓN
