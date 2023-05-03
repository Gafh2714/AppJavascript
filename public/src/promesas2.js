import { saludar3 } from "./promesas.js";



/*import { heroes } from "../data/heroes.js";*/



const divPrincipal = document.getElementById('app');

const getHeroes = () => {
    divPrincipal.innerHTML = 'Cargando Usuarios desde Url Externa...';    

    fetch('https://jsonplaceholder.typicode.com/todos').then( response =>  response.json() )
    .then(datosjson => {
        divPrincipal.innerHTML = renderTable(datosjson);
    });


    /*setTimeout(() => {        
        divPrincipal.innerHTML = render();
    }, 2000);*/
};


const render =() => {

    let html = [];
    
    for(const item of heroes) {

        console.log(item);
        html.push(`
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
            <img src="${item.picture}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.about}.</p>            
            </div>
            </div>
        </div>`);
    }
    return html.join('');
}

const renderTable =(dataJson) => {
return `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
    </tr>
  </thead>
  <tbody>${renderDetailTable(dataJson)}</tbody> </table>`;
}

const renderDetailTable = (dataJson) => {
    let html = [];
    for(const element of dataJson)
    {
        html.push(`<tr>
        <th scope="row">${element.userId}</th>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${`<input type="checkbox" ${(element.completed) ? 'checked': ''} disabled>`}</td>
      </tr>`);    
    }

    return html.join('');
};



getHeroes();







