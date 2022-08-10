function padrao() {
    clearAll();
}
function darkBlue() {
    clearAll();
    document.getElementById("theme").classList.add('dark-blue');
}
function pink() {
    clearAll();
    document.getElementById("theme").classList.add('pink');
}
function darkPink() {
    clearAll();
    document.getElementById("theme").classList.add('dark-pink');
}
function clearAll() {
    document.getElementById("theme").classList.remove('dark-blue');
    document.getElementById("theme").classList.remove('pink');
    document.getElementById("theme").classList.remove('dark-pink');
}


/*
ambos funcionam da mesma forma com algumas diferenças

document.querySelector("#theme") - usa como referencia os padrões de CSS mesmo para ID, Class ou tag
document.getElementById("theme") - usa como referencia somente o ID

no caso abaixo ambos trazem todos os elementos que tenham a mesma referencia

document.querySelectorAll(".theme") - usa como referencia os padrões de CSS mesmo para ID, Class ou tag
document.getElementsByClassName('teste') - usa como referencia somente o nome da classe
document.getElementsByTagName('button') - usa como referencia somente  o nome da tag
*/