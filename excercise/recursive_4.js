/*En el entorno del navegador, implementa una función que reciba un objeto de tipo HTMLElement
 (ej: document.body) como argumento, recorra recursivamente el DOM desde el nodo que nos han
  pasado y retorne un objeto con la estructura encontrada (ver ejemplo más abajo).

*/
// `object domToObj( HTMLElement el )`

// Ejemplo:

// Con el HTML siguiente:

// &lt;html&gt;
//  &lt;body&gt;
//   &lt;p id="foo"&gt;hola &lt;strong&gt;pepito!&lt;/strong&gt;&lt;/p&gt;
//   &lt;a href="#" class="bar"&gt;x&lt;/a&gt;
//  &lt;/body&gt;
// &lt;/html&gt;


// Si invocamos `domToObj()` pasando `document.body` como argumento debería retornar:

// {
//  "id": "",
//  "tag": "BODY",
//  "className": "",
//  "children": [
//  {
//   "id": "foo",
//   "tag": "P",
//   "className": "",
//   "children": [{ "id": "", "tag": "STRONG", "className": "", "children": [] }]
//  },
//  { "id": "", "tag": "A", "className": "bar", "children": []}
//  ]
// }

const domToObj = element=>{
  return {
    id:element.id,
    tag:element.tag,
    tagName:element.tagName,
    children:[...element.children].map(domToObj)
  }
}
let body = document.querySelector('body');
console.log(domToObj(body))