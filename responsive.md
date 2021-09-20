Antes de que escribimos cualquier tipo de media query, tenemos
que asegurarnos que el codigo HTML tiene una linea de codigo escrita
que es muy importante.

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

Esta linea o metatag puede parecer no muy importante, pero para diseno
responsive es absolutamente crucial

Si has escrito la estructura html a mano posiblemente esta linea
no esta incluida. Debemos agreagarla.

Sin este metatag o linea de codigo, repsonsibe web design no funcionara
en ningun dispositivo fisico mobile, no funcionara en telefono o tabletas.

La razon de esto es que el navegador en dispositivos mobiles hara un zoom out
de la pagina automaticamente hasta que entra en la pantalla.
Y eso no lo queremos cuando utilizamos media queries, simplemente queremos
hacer nuestro diseno completo mas pequeno, y menos ancho.

Entonces necesitamos esa linea de codigo

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

qie hara que la pagina coincida con el tamano del ancho de la pantalla.

El ancho sera del ancho del dispositivo (width=device-width) , y la escala
inicialmente sera 100% (initial-scale=1.0) indicado con el valor 1.0 en
este caso.
Esto quieren decir, que no hara el zoom out de la pagina para hacer la pagina
que entre en la pantalla.
Como funciona no es realmente tan importante, lo importante es que tenemos que
incluir la linea:

<!-- Siempre incluye esta linea -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

Hemos creado este file queries.css donde vamos a incluir todo las
media queries, y que debemos agregar una referencia en el html.

Para poder iniciar a escribir media queries necesitamos los breakpoints
donde queremos utilizar las media queries.

Observaremos donde nuestro diseño se rompe y tambien teniendo en cuenta
los anchos de las pantallas mas comunes.

Iniciamos a 1500px y vamos haciendo la pagina mas pequena. Si recordamos
tenemos un ancho de un .container (contenedor) de 1200px en la seccion
"como funciona" que es el contenedor comun. Pero la seccion Hero tiene
1300px un poco mas ancho.

Lo que se puede observar ya a 1318px es que el espacion de la imagen en
el header, y del texto de la seccion Hero estan agrandandose los
espacios con el borde izquierdo de la pagina.

Aqui el ancho de la pagina no se esta rompiendo, pero queremos que la
seccion Hero a cierto punto tenga 1200px de ancho como el resto de la
pagina. Como el elemento container general.

Hay un brakpoint muy conocido 1366px llamado HD ready screens donde
podemos elegir un breakpoint entre 1300 y 1366px para hacer la seccion
HERO sea ancha como el resto de la pagina.

Hay una particularidad con media queries que no debemos utilizar PX en
media queries, igual que no debemos utilizar PX para nuestros diseños,
no debemos utilizarlos en media queries.

La razon es que utilizando PX NO VA AJUSTAR a el tamano de la fuente
del usuario seteado en el navegador y no se ajustara el nivel de zoom
del usuario.

Por esta razon en todo el projecto establecimos el tamaño de la fuente
a un porcentaje y no a un numbero fijo de 10px como teniamos inicialmente.
Esta es la razon por la que temenos font-size: 62.5%;
Porque 10px que eran los que queriamos dividido 16px que es el default
del tamano de la fuente del navegador. Por eso utilizamos REM en lugar
de Pixels.

HAY UNA PARTICULARIDAD MUY IMPORTANTE EN ESTAS UNIDADES RESPONSIVE CON
MEDIA QUERIES Y ES EL HECHO DE QUE NO RESPONDEN AL VALOR DEL FONT-SIZE
PORCENTAJE DE LA FUENTE EN EL SIGUIENTE CODIGO

html {
font-size: 62.5%;
}

Esto significa que en media queries 1 REM no es 10px. En su lugar
1REM sera el default del tamano de la fuente del navegador.

REM and EM no dependen en el tamano de la fuente del los valores
establecidos en el css para html cuando utilizamos media queries.

En cambio asumimos que 1rem = 1em = 16px

Que es la unidad EM?
-REM el root font size, tamano de la fuente raiz
-EM es el actual tamano de la fuente

No es realmente importante porque 1REM es SIMPLEMENTE igual que 1EM.

La razon por la que mencionamos esto es porque REM tiene algunos ERRORES (BUGS)
en algunos navegadores cuando lo utilizamos con media queries, por eso utilizamos EM.

Es mas seguro y funciona igual que REM.

/******\*\*\*\*******\*******\*\*\*\*******/
/_ COMPUTADORAS PEQUENAS _/
/_ CALCULO (1344/16) 84.375 PX _/
/_ Esta MEDIA QUERY SE EJECUTARA _/
/_ cuando sea al ancho menor de _/
/_ 1344PX. _/
/_ Si alguient tiene una latpo _/
/_ con un ancho pequeno, esto va _/
/_ a solucionar el problema, en _/
/_ la parte superior de la pagina_/
/******\*\*\*\*******\*******\*\*\*\*******/

/_ tenemos que devidir 1350px / 16px _/

```
@media (max-width: 84em) {
  /* cambiar el max-width to 1200px de la seccion hero
  como lo tenemos en el container general */
  .hero {
    max-width: 120rem; /*rem no tiene nada que ver con em, funciona
                         del mismo modo que antes iniciamos
                         responsive web design. */
  }
  /* cuando cambiamos el ancho a 120rem, se genera el problema que
     el titulo se transforma en cuatro lineas. y no se ve bien. Es
     por este motivo que disminuimos el valor del texto a 4.4rem,
     INICALMENTE era de 5.2 */
  .heading-primary {
    font-size: 4.4rem;
  }
  /*
    NOTA: no es buena practica agregar 10 o 15 media queries para
      solucionar cada uno de los problemas. Lo que hacemos es
      en la seccion TESTIMONIOS, cuando estamos en
      aproximadamente 1348px cambiamos el diseno DE tres
      columnas de imagenes a solo DOS COLUMNAS.
  */
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  /* se vera que el espacio superior de la columna con text
     se incrementa pero no podemos hacerlo perfecto para
     casa una de las distintas pantallas.
     A 1200px es muy comun esta medida y se ve bien el
     espacio */
}
```
