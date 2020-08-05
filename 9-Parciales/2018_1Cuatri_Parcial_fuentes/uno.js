
function mostrar()
{
 var contador = 0;
 var tipodeProducto;


 while(contador < 5) { 
     contador++;

     do { 

        tipodeProducto = prompt("ingrese el tipo de producto");
      } while (tipodeProducto != "barbijo";
        
        && tipodeProducto!="Jabon"
        && tipodeProducto !="Alcohol");
        
        do { 
            precio = prompt ("Ingrese un precio");
            precio = parseInt(precio);
        } while (precio <100 || precio > 300 || isNaN(precio));
    }
    






}
