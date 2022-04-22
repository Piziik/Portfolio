var corbeille = document.getElementById('bin')
var aDeBin = document.getElementById('aDeBin')

var tholdi = document.getElementById('tholdi')
var aDeTholdi = document.getElementById('aDeTholdi')

var ppe4 = document.getElementById('ppe4')
var aDePpe4 = document.getElementById('aDePpe4')

var stage = document.getElementById('stage')
var aDeStage = document.getElementById('aDeStage')

var veille = document.getElementById('veille')
var aDeVeille = document.getElementById('aDeVeille')

var fermer = document.querySelectorAll('#close')

aDeBin.addEventListener('click', function(e){
    corbeille.style.display = 'block'
    tholdi.style.display = 'none'
    ppe4.style.display = 'none'
    stage.style.display = 'none'
    veille.style.display = 'none'
})

aDeTholdi.addEventListener('click', function(e){
    tholdi.style.display = 'block'
    corbeille.style.display = 'none'
    ppe4.style.display = 'none'
    stage.style.display = 'none'
    veille.style.display = 'none'
})

aDePpe4.addEventListener('click', function(e){
    ppe4.style.display = 'block'
    corbeille.style.display = 'none'
    tholdi.style.display = 'none'
    stage.style.display = 'none'
    veille.style.display = 'none'
})

aDeStage.addEventListener('click', function(e){
    stage.style.display = 'block'
    corbeille.style.display = 'none'
    tholdi.style.display = 'none'
    ppe4.style.display = 'none'
    veille.style.display = 'none'
})

aDeVeille.addEventListener('click', function(e){
    veille.style.display = 'block'
    corbeille.style.display = 'none'
    ppe4.style.display = 'none'
    tholdi.style.display = 'none'
    stage.style.display = 'none'
})

fermer[0].addEventListener('click', function(e){
    corbeille.style.display = 'none'
    corbeille.style.top = '50%'
    corbeille.style.left = '50%'
})
fermer[1].addEventListener('click', function(e){
    tholdi.style.display = 'none'
    tholdi.style.top = '50%'
    tholdi.style.left = '50%'
})
fermer[2].addEventListener('click', function(e){
    ppe4.style.display = 'none'
    ppe4.style.top = '50%'
    ppe4.style.left = '50%'
})
fermer[3].addEventListener('click', function(e){
    veille.style.display = 'none'
    veille.style.top = '50%'
    veille.style.left = '50%'
})
fermer[4].addEventListener('click', function(e){
    stage.style.display = 'none'
    stage.style.top = '50%'
    stage.style.left = '50%'
})


/* TEST */

moveable = document.querySelectorAll('#moveable')

// la fonction mathématique
function compliquee(r) {
            x = 400 * Math.sin(r),
            y = 400 * Math.cos(r);
    corbeille.style.left = x + 'px';
    corbeille.style.top = y + 'px';
    tholdi.style.left = x + 'px';
    tholdi.style.top = y + 'px';
    ppe4.style.left = x + 'px';
    ppe4.style.top = y + 'px';
    veille.style.left = x + 'px';
    veille.style.top = y + 'px';
    stage.style.left = x + 'px';
    stage.style.top = y + 'px';
}

// la fonction qui réagit au mousemove
// je la déclare à l'avance pour garder sa référence
function slide(e) {
    // note comment j'utilise max et min pour faire un intervalle
    corbeille.style.top = e.clientY +250 + 'px';
    corbeille.style.left = e.clientX + 'px';
    tholdi.style.top = e.clientY +250 + 'px';
    tholdi.style.left = e.clientX + 'px';
    ppe4.style.top = e.clientY +250 + 'px';
    ppe4.style.left = e.clientX + 'px';
    veille.style.top = e.clientY +250 + 'px';
    veille.style.left = e.clientX + 'px';
    stage.style.top = e.clientY +250 + 'px';
    stage.style.left = e.clientX + 'px';
    compliquee(e);
}

moveable[0].addEventListener('mousedown', function(e){
    e.preventDefault()
    window.addEventListener('mousemove', slide, false);
}, false)
moveable[1].addEventListener('mousedown', function(e){
    e.preventDefault()
    window.addEventListener('mousemove', slide, false);
}, false)
moveable[2].addEventListener('mousedown', function(e){
    e.preventDefault()
    window.addEventListener('mousemove', slide, false);
}, false)
moveable[3].addEventListener('mousedown', function(e){
    e.preventDefault()
    window.addEventListener('mousemove', slide, false);
}, false)
moveable[4].addEventListener('mousedown', function(e){
    e.preventDefault()
    window.addEventListener('mousemove', slide, false);
}, false)

window.addEventListener('mouseup', function( e ) {
    // le bouton est relâché, donc je désinscris ma fonction slide
    // c'est pour ça que j'avais besoin de la référence
    this.removeEventListener('mousemove', slide, false);
}, false);