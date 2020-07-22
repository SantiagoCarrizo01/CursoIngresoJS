function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;
	var NotaExamen;

	max = 11;
	min = 1;
	numeroRandom = Math.floor(Math.random() * (max - min )) + min;
	console.log(numeroRandom);
	if (numeroRandom>= 9) {
		alert("Excelente");
	  } else 
	  
	  if ( numeroRandom >= 4) {
		alert("Aprobó");
	  } else {
		
		alert("Vamos , la proxima se puede");
	  }


}//FIN DE LA FUNCIÓN