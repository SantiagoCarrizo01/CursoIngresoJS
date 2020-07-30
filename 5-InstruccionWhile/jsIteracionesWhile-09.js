/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var respuesta;
	var maximo;
	var minimo;
	var numero;

	while(respuesta){
     do{ 

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
	 } while(isNaN(numero));
	 if(primeraVez){ 
		 primeraVez = false

	 if(numero > maximo){ 
	 }
	 if (numero < minimo) { 
		 minimo = numero;
	 } }

}//FIN DE LA FUNCIÓN