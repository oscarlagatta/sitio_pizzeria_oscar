# Pizza y Quarto ![Pizza y Quarto](/img/logos/photo-pizze.jpg)

Mark down https://www.markdownguide.org/basic-syntax/

# Detalles tecnicos

## Responsive Design / Diseño sensible a cambios

> Es una tecnica de diseno para hacer que una pagina web ajuste su contenido y estilo visual a todo tipo de pantalla posible (ventana o tamaño del navegador).
> En practica esto significa que el diseño hace que los sitios web puedan ser usados en todos los dispositivos posibles, como en el escritorio del ordenaror, tabletas, y telefonos moviles.
> Diseño responsive (Diseño sensible a cambios) no es una tecnologia separada, en realidad es un conjunto de buenas practicas que usamos en CSS (Cascade Style Sheet / Hojas de Estilo).

## Hay 4 ingredientes principales en Responsive Design / Diseño sensible a cambios

> ### Fluid Designs - Diseños fluidos

- Permite que la pagina se adapte al tamaño actual del navegador. Usando generalment FlexBox y CSS Grid (veremos luego que son estos dos) que son fluidos por definicion.

- Usamos % porcentajes (o unidades vh/hw) en lugar de pixeles PX para elementos que deberian adaptarse al tamaño del navegador (layout/diseño del contenido).
- Usamos max-width en lugar de with.

> ### Responsive Units - Unidades de Respuesta

- Significa que debemos usar unidades REM (root em) en lugar de PX pixeles para la mayoria de los tamaños.
- De esta manera va a ajustar el contenido de la pagina arriba y abajo automaticamente.
- Un truco podria seria establecer 1 REM a 10 PX para facilitar los calculos de tamaños.

> ### Flexible Images - Imagenes Flexibles

- Imagenes se comportant muy diferente no se ajustan automaticamente cuando cambiamos el tamaño del navegador. Entonces tenemos que corregir eso para asegurarnos que las imagenes se adaptan a cualquier tamaño del navegador donde visualizamos la pagina.
- Normalmente hacemos imagenes flexibles usando dimensiones en % (porcentajes) y tambien a veces usando la propiedad max-width en lugar de with.

> ### Media Queries - Consultas de medios

- Esto es lo que une todo lo anterior y trae a la vida el modo sensible a cambios (Responsive sites to life!)
- Sin Media Querias el diseño sensible a cambios no funcionaria nunca, porque las media queries nos permite de cambiar los estilos en ciertos tamaños del ancho del navegador al cual llamamos BREAKPOINTS o puntos de interrupcion. Esto permite a los desarrolladores de sitios web de crear diferentes versiones del sitio web para los diferentes tipos de dispositivos ya que los diferentes tipos de dispositivos tienen diferentes anchos de pantalla.
- Debemos considerar que usar Media Queries solamente es inutil, debemos crear un diseño de pagina web fluido desde el principio, y lo mismo se aplica para Unidades de Respuesta (Responsive Units) e imagenes flexibles.
- Generalmente escribimos las Media Queries al final de haber escrito una pagina o un componente. Por este motivo para este sitio web vamos a utlizar Fluid Layouts, Responsive Units y Flexible Images. Luego usaremos Media Queries para hacer la pagina sensible a los cambios de tamaño de las pantallas del ordenador.

### Finalmente hay dos estrategias para constuir sitos que son sensibles a los cambios de tamaño del navegador.

Desktop First Approach (enfoque de escritorio primero): donde optimizamos las interfaces para pantallas grandes, por eso iniciamos escribiendo codigo CSS para las pantallas grandes en nuestro archivo principal de estilos CSS (style.css). Luego cuando queremos hacer el sitio web sensible a cambios escribimos Media Queries para comprimir el contenido de modo que pueda entrar el contenido en una pantalla mas pequeña. Este es el modo mas tradicional y el mas facil de entender. Por esta razon vamos a utilizar este approach para el sitio de la pizzeria.

Mobile First (Dispositivo Movil primero): es donde iniciamos a escribir CSS para pantallas pequeñas de modo de optimizar el contenido del sitio para pantallas de dispositivos moviles y de ahi podemos movernos a pantallas mas grandes usando Media Queries. Basicamente lo opuesto a Desktop First.
La idea detras de Mobile First es que nosotros como diseñadores tenemos que pensar primero en la experiencia del sitio en un dispositivo movil para los usuarios. Y hacemos esto reduciendo el sitio web a lo esencial y quitando todo lo que no sean necesario.

Visto que vivimos en un mundo movil este ultimo se convirtio en el modo mas moderno de construir sitios web estos dias.

Pero como haciendo el modo Desktop first es el mejor modo de aprender como funciona el desarrollo, prefiero usar este primero para que se pueda entender como HTML y CSS funcionan y ver los resultados en una pantalla grande.

### Como funciona la unidad REM y la propiedad max-width

Podemos decir que si el contenedor del elemento con max-width es mas grande entonces el elemento tendra el valor especificado por max-width, sin embargo en el caso de que el contender del elemento es mas pequeño que el contenedor entonces el elemento tendar 100% del ancho del contenedor.

## La unidad REM

REM es el tamaño de la typografia del elemento raiz (root element). La raiz del documento web is el elemento HTML que es el elemento padre de todos los otros elementos. Si no definimos ningun tamano de typografia quiere decir que 1 REM es igual al tamano por default que tiene la typografia que es SIEMPRE 16px pixels.

Ejemplo:
max-width: 50rem;
si 1 rem = 16 px (porque no hemos espcificado ningun tamaño en el elemento <html>)
el ancho seria si 1rem = 16px => 50rem => 800px

Normalmente se ve un poco extraño definir los tamaños de los elementos html basados en el tamaño de la tipografia, pero es ahi donde esta el poder de la unidad REM, es que podemos cambiar el tamano de la tipografia del elemento <html></html> y automaticamente cambiara donde esta utilizado en la hoja de estilos CSS con la unidad REM.

Por ejemplo la clase que usamos para demostrar es test

```json
.test {
  background-color: red;
  padding: 4rem;
  max-width: 50rem;
  color: #fff;
  font-size: 2rem;
}
```

Si ahora le cambiamos al elemento html a tener un tamaño de tipografia de 10px entonces todo va a comprimirse con un menor tamaño.

```
html {
  font-size: 10px;
}
```

Y con esto se demustra que cambiando el tamaño de la fuente del elemento <html> todo el contenido de la pagina cambiara automaticamente donde haya utilizado la unidad REM.

NOTA: existe el siguiente problema cuando utilzamos lo siguiente

```json
html {
  font-size: 10px;
}
```

En el caso en que el usuario ajusta el tamaño de la fuente del navegador, esos cambios no se reflejaran en la pagina porque le estamos dando un valor especifico. Esto ocasiona problemas a personas con disabiliades para leer. Pero con lo que hemos cambiado en el elemento html estos cambios no se veran reflejados.
Es por esta razon que no vamos a establecer el tamaño de la fuente a uno especifico, en lugar vamos a utilizar un valor de porcentaje

De donde viente este valor 62.5%; si deseamos que nuestra tipografia sea de 10px sabemos que el default es 16px entonces dividimos 10 / 16 que dara el valor de 0.625 que es 62.5%.

```json
html {
  /* Porcentaje del tamaño de la tipografia del usuario*/
  font-size: 62.5%;
}
```

Utilizando esta tecnica respetamos el tamaño de fuente que el usuario ha seleccionado.

```
(16 * 0,625 = 10px)
(12 * 0,625 = 7.5px)
```
