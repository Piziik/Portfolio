/*var id = document.getElementById('pass');

var typewriter = new Typewriter(id, {
    loop: true
});

typewriter.typeString('CoinCoin')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
    */

let id = document.querySelector('#pass');
let id_placeholder = 'CoinCoin';

id.addEventListener('input', (e)=>{
    if(e.target.value.length < 1){
        typing();s
    }
})

function typing(){
    let placeholder = '';
    let x = 0;
    id.setAttribute('placeholder', '');
    let interval = setInterval(() =>{
        placeholder += id_placeholder[x];
        x++;

        id.setAttribute('placeholder', placeholder);
        if(x > id_placeholder.length - 1){
            clearInterval(interval);
        }
    },120)
}
typing();