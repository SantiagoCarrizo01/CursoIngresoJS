/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
  var temperatura;
  var farenheitGrado;

  temperatura = txtIdTemperatura.value;

  temperatura = parseInt(temperatura);
  farenheitGrado = parseInt(farenheitGrado);
  
  farenheitGrado = (temperatura -32) * 5 / 9;

  alert(farenheitGrado +"grados fahrenheit son" + "grados centigrados");


}

function CentigradosFahrenheit () 
{
	 var temperatura;
  var farenheitGrado;

  temperatura = txtIdTemperatura.value;

  temperatura = parseInt(temperatura);
  farenheitGrado = parseInt(farenheitGrado);
  
  farenheitGrado = (temperatura *5 / 9) -32;

  alert(farenheitGrado +"grados fahrenheit son" + "grados centigrados");
}
