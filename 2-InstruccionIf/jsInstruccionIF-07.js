function mostrar()
{
	
	var edad;
	var CivilStatus;
	
	edad = txtIdEdad.value;
	CivilStatus = estadoCivil.value;
	
	if(edad < 18 && CivilStatus != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");

	}

    

	


}//FIN DE LA FUNCIÓN