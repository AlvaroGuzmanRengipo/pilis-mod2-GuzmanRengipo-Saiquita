/* Formulario de Registro */
function onClick(event) {
    event.preventDefault();

    this.style.backgroundColor = "white";
    console.log("click...");
    console.log(event);


    const mensaje = {
        comercio: document.getElementById('comercio').value,
        titular: document.getElementById('titular').value,
        celular: document.getElementById('celular').value
    }
    console.log(mensaje);


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                'Enviado',
                'Gracias por tu Registro',
                'success'
            );
            cleanForm();
            /* redirectUrl(); */
        })
        .catch((err) => console.log(err));

}

function cleanForm() {
    let formulario = document.getElementById('registro_formulario');
    formulario.reset();
}
function redirectUrl() {
    window.location.href = "https://google.com";
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


/* API_OpenWheater */

const clima = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.183231726305895&lon=-65.33127644531041&appid=14c57f631ebd8bef7ab2bc3f52ea55a6&lang=es&units=metric'

fetch(clima)
.then(response => response.json())
.then(data => {
    let element = document.getElementById('estado_clima') /* obtine el elemento del HTML y lo guarda en una variable, para el caso element */
    element.innerHTML =`
    <h1>Datos del Clima</h1>
    <h1>"Ciudad Cultural"</h1>
    <br>
    <p>${data.name}</p>
    <br>
    <h3>Temperatura Actual</h3>
    <p><b>${data.main.temp+"°"}</b></p>
    <br>
    <p><b>${data.weather[0].description}</b></p>

    `
    console.log(data)
})