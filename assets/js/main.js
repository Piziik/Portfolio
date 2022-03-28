var tholdi = document.getElementById('tholdi')
var aDeTholdi = document.getElementById('aDeTholdi')

var ppe4 = document.getElementById('ppe4')
var aDePpe4 = document.getElementById('aDePpe4')

var stage = document.getElementById('stage')
var aDeStage = document.getElementById('aDeStage')

var veille = document.getElementById('veille')
var aDeVeille = document.getElementById('aDeVeille')

var fermer = document.querySelectorAll('#close')
console.log(fermer)


aDeTholdi.addEventListener('click', function(e){
    tholdi.style.display = 'block'
    ppe4.style.display = 'none'
    stage.style.display = 'none'
    veille.style.display = 'none'
})

aDePpe4.addEventListener('click', function(e){
    ppe4.style.display = 'block'
    tholdi.style.display = 'none'
    stage.style.display = 'none'
    veille.style.display = 'none'
})

aDeStage.addEventListener('click', function(e){
    stage.style.display = 'block'
    tholdi.style.display = 'none'
    ppe4.style.display = 'none'
    veille.style.display = 'none'
})

aDeVeille.addEventListener('click', function(e){
    veille.style.display = 'block'
    ppe4.style.display = 'none'
    tholdi.style.display = 'none'
    stage.style.display = 'none'
})

fermer[0].addEventListener('click', function(e){
    tholdi.style.display = 'none'
})
fermer[1].addEventListener('click', function(e){
    ppe4.style.display = 'none'
})
fermer[2].addEventListener('click', function(e){
    stage.style.display = 'none'
})
fermer[3].addEventListener('click', function(e){
    veille.style.display = 'none'
})
