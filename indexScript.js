console.log("Script loader!");
var form1 = document.getElementById("form");
var getContent = document.getElementById("form-info")

form1.addEventListener("submit", function (event) {
  var name = form1.elements["name"].value
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());// --> Así lo dejó el profe
  console.log(event);
  console.log("submit");
  console.log(data);   //-->Así lo dejó el profe

  //------------------------------------------------------------------------

  //Agregando el contenido a un contenedor en la página web


  /*getContent.innerHTML +=  "<div>" +data.name+data.lastNames+data.email+data.emailVerify+data.phone+data.address+data.birth+data.height+data.password+data.passwordReview+data.bio+"</div>";   */

  getContent.innerHTML += "<div>" + data.name + "</div>";
  getContent.innerHTML += "<div>" + data.lastNames + "</div>";
  getContent.innerHTML += "<div>" + data.email + "</div>";
  getContent.innerHTML += "<div>" + data.emailVerify + "</div>";
  getContent.innerHTML += "<div>" + data.phone + "</div>";
  getContent.innerHTML += "<div>" + data.address + "</div>";
  getContent.innerHTML += "<div>" + data.birth + "</div>";
  getContent.innerHTML += "<div>" + data.height + "</div>";
  getContent.innerHTML += "<div>" + data.password + "</div>";
  getContent.innerHTML += "<div>" + data.passwordReview + "</div>";
  getContent.innerHTML += "<div>" + data.textarea + "</div>";



});

//------------------------------------------------------------------------

//Etiqueta con cambio de color

//Función hecha para resolver el parcial colocando la info en un label y 
//luego colocandole un listener para que escuche el evento y cambien de color
function change() {
  //
  const containerJavaScript = document.getElementById('javaScriptChange');
  const containerPython = document.getElementById('pythonChange');
  const containerJava = document.getElementById('javaChange');
  const containerC = document.getElementById('cChange');
  const containerPHP = document.getElementById('phpChange');
  const containerCchar = document.getElementById('cCharChange');
  const containerGo = document.getElementById('goChange');
  const containerScala = document.getElementById('scalaChange');
  const containerKotlin = document.getElementById('kotlinChange');
  const containerswift = document.getElementById('swiftChange');

  const labelPython = document.getElementById('PythonLabelChange');
  const labelJava = document.getElementById('javaLabelChange');
  const labeLc = document.getElementById('cLabelChange');
  const labeLPHP = document.getElementById('PHPLabelChange');
  const labeLcChar = document.getElementById('cCharLabelChange');
  const labeLGo = document.getElementById('goLabelChange');
  const labeLScala = document.getElementById('scalaLabelChange');
  const labeLKotlin = document.getElementById('kotlinLabelChange');
  const labeLswift = document.getElementById('swiftLabelChange');


  //
  containerJavaScript.addEventListener('click', () => {
    containerJavaScript.classList.toggle("changeColor");
    labelJavaScript.classList.toggle("labelChangeColor");
    containerJavaScript.classList.toggle("changeElement");
    labelJavaScript.classList.toggle("colorLabel");
  });
  containerPython.addEventListener('click', () => {
    containerPython.classList.toggle("changeColor");
    labelPython.classList.toggle("labelChangeColor");
    containerPython.classList.toggle("changeElement");
    labelPython.classList.toggle("colorLabel");
  });
  containerJava.addEventListener('click', () => {
    containerJava.classList.toggle("changeColor");
    labelJava.classList.toggle("labelChangeColor");
    containerJava.classList.toggle("changeElement");
    labelJava.classList.toggle("colorLabel");
  });
  containerC.addEventListener('click', () => {
    containerC.classList.toggle("changeColor");
    cLabelChange.classList.toggle("labelChangeColor");
    containerC.classList.toggle("changeElement");
    cLabelChange.classList.toggle("colorLabel");
  });
  containerPHP.addEventListener('click', () => {
    containerPHP.classList.toggle("changeColor");
    labeLPHP.classList.toggle("labelChangeColor");
    containerPHP.classList.toggle("changeElement");
    labeLPHP.classList.toggle("colorLabel");
  });
  containerCchar.addEventListener('click', () => {
    containerCchar.classList.toggle("changeColor");
    labeLcChar.classList.toggle("labelChangeColor");
    containerCchar.classList.toggle("changeElement");
    labeLcChar.classList.toggle("colorLabel");
  });
  containerGo.addEventListener('click', () => {
    containerGo.classList.toggle("changeColor");
    labeLGo.classList.toggle("labelChangeColor");
    containerGo.classList.toggle("changeElement");
    labeLGo.classList.toggle("colorLabel");
  });
  containerScala.addEventListener('click', () => {
    containerScala.classList.toggle("changeColor");
    labeLScala.classList.toggle("labelChangeColor");
    containerScala.classList.toggle("changeElement");
    labeLScala.classList.toggle("colorLabel");
  });
  containerKotlin.addEventListener('click', () => {
    containerKotlin.classList.toggle("changeColor");
    labeLKotlin.classList.toggle("labelChangeColor");
    containerKotlin.classList.toggle("changeElement");
    labeLKotlin.classList.toggle("colorLabel");
  });
  containerswift.addEventListener('click', () => {
    containerswift.classList.toggle("changeColor");
    labeLswift.classList.toggle("labelChangeColor");
    containerswift.classList.toggle("changeElement");
    labeLswift.classList.toggle("colorLabel");
  });
}
change();

//------------------------------------------------------------------------

//Vector

/** con el formulario q estamos trabajamos vamos a almacenarlo en un vector 
y al limpiar el formulario > el vector crece al darle submit 
pero sin actualizar la página, solo quedaría en la memo ram del compu pero 
al recargar se pierde la info */

//Agregando elemntos al vector

let data = [];

function addElementsOnVector() {
  let nameInformation = document.getElementById("name").value;
  let lastNameInformation = document.getElementById("lastNames").value;
  let emailInformation = document.getElementById("email").value;
  let emailVerifyInformation = document.getElementById("emailVerify").value;
  let phoneInformation = document.getElementById("address").value;
  let addressInformation = document.getElementById("address").value;
  let birthInformation = document.getElementById("birth").value;
  let heightInformation = document.getElementById("height").value;
  let passwordInformation = document.getElementById("password").value;
  let passwordReviewInformation = document.getElementById("passwordReview").value;
  let textareaInformation = document.getElementById("textarea").value;
  data.push(nameInformation);
  data.push(lastNameInformation);
  data.push(emailInformation);
  data.push(emailVerifyInformation);
  data.push(phoneInformation);
  data.push(addressInformation);
  data.push(birthInformation);
  data.push(heightInformation);
  data.push(passwordInformation);
  data.push(passwordReviewInformation);
  data.push(textareaInformation);
}

//Mostrando elementos del vector
function showVector() {
  let ans = document.getElementById('result');
  result.innerHTML = '';
  for (const information of data) {
    let informationOnParagraph = document.createElement('p');
    informationOnParagraph.innerHTML = information;
    //Agregamos informationOnParagraph
    result.appendChild(informationOnParagraph);

  }
}
showVector();



//------------------------------------------------------------------------

/**Persistencia con localStorage: Tener la data que estamos trabajando en el ejercicio que les deje la clase pasada, 
persistida en el web Storage. Pasarlo a persistencia con localStorage */



/**Importante:
Para mantener la organización: Se debe manejar (JSON o en 
lógica en manera de diccionario o como un JSon {cada cantidad de datos}
o sacar toda la data en una sola función y eso queda como un archivo JSON:
const data = Object.fromEntries(new FormData(event.target).entries())
console.log(data);
writeDocument(data) 
Para evitarse todas esas líneas de cod--> crea esa data y le hace push al array con esa data y limpia y 
cada vez que se va ingresando va haciendo lo mismo
y ahí garantiza que esa data mantiene la estructura de un JSON
y para traerlo lo q se hace es recorrer el array y traer el objeto y ya ahí se puede modificar */



const boton = document.querySelector('#showInformation');
boton.addEventListener('click', () => {

  function showInformationFromLocalStorage() {
    /*Obtener datos almacenados*/
    let nameVarGet = localStorage.getItem("Name");
    let lastNameGet = localStorage.getItem("LastName");
    let emailGet = localStorage.getItem("Email");
    let emailVerifyGet = localStorage.getItem("LastName");
    let phoneGet = localStorage.getItem("LastName");
    let addressGet = localStorage.getItem("LastName");
    let birthGet = localStorage.getItem("LastName");
    let heightGet = localStorage.getItem("LastName");
    let passwordGet = localStorage.getItem("LastName");
    let passwordReviewGet = localStorage.getItem("LastName");
    let textareaGet = localStorage.getItem("LastName");

    /**Además de almacenar la data, se tiene que mostrar en un contenedor
    cada vez q se grabe un nuevo campo se va ir crediendo ese contenedor porq va a tener más data 
    los datos son acumulativos por más q se cierre el navegador y se actualice la página deben persistir y seguir mostrandose ahí
    lo q ya se creo debe seguir almacenado al volverlo abrir */
    /*Mostrar datos almacenados*/
    document.getElementById("name").innerHTML = nameVarGet;
    document.getElementById("lastNames").innerHTML = lastNameGet;
    document.getElementById("email").innerHTML = emailGet;
    document.getElementById("emailVerify").innerHTML = emailVerifyGet;
    document.getElementById("phone").innerHTML = phoneGet;
    document.getElementById("address").innerHTML = addressGet;
    document.getElementById("birth").innerHTML = birthGet;
    document.getElementById("height").innerHTML = heightGet;
    document.getElementById("password").innerHTML = passwordGet;
    document.getElementById("passwordReview").innerHTML = passwordReviewGet;
    document.getElementById("textarea").innerHTML = textareaGet;
  }

  showInformationFromLocalStorage()
})




//------------------------------------------------------------------------
/** var vectorName =[],
    vectorLastName =[];


var elementShowButton = document.querySelector('#showInformation');
elementShowButton.addEventListener('click', saveOnLocalStoarge);

function saveOnLocalStoarge(){
  var nameUser = document.querySelector("#name").value;
  var lastNameUser = document.querySelector("#lastNames").value;

  vectorName.push(nameUser);
  vectorLastName.push(lastNameUser);

  localStorage.setItem('name_user', JSON.stringify(vectorName));
  localStorage.setItem('lastName_user', JSON.stringify(vectorLastName));
}
saveOnLocalStoarge()




function fiilInTable(){
  var getInformationFromTbody = document.querySelector('informationTable tbody');

  //Limpiar el tbody para q los datos no se vayan a duplicar más adelante
  //tbody.innerHTML = '';

  //Creo variable para cada uno de los arreglos --> lo contrario que setItem ahora con getItem para sacarlo de localStorage
  //Estaba en texto lo vuelvo a convertir a arreglo --> JSON.parse
  vectorName = JSON.parse(localStorage.getItem(name_user));
  vectorLastName = JSON.parse(localStorage.getItem(lastName_user));


  var nQuantityRecords = vectorName.length;

  var row = document.createElement('tr'),

  for(var i = 0; i < nQuantityRecords; i++){

    //creando dilas
    var cellName = document.createElement('td'),
        cellLastName = document.createElement('td');

        //creando nodos
    var nodeTextName = document.createTextNode(vectorName[i]),
    var nodeTextLastName = document.createTextNode(vectorLastName[i]);

    //asignando el nodo a la celda y esto a la fila
    row.appendChild(cellName.appendChild(nodeTextName)),
    row.appendChild(cellLastName.appendChild(nodeTextLastName));

  }

}
fiilInTable()*/








