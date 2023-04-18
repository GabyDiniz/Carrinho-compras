const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
//Listagem dos modelos
modeloJson.map((item, index) => {
    let modeloItem = document.querySelector('.models .modelo-item').cloneNode(true);

    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;

    c('.modelo-area').append(modeloItem);
})