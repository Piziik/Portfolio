//Fonction animation input
window.addEventListener('DOMContentLoaded', event => {

    let id = document.querySelector('#pass');
    let id_placeholder = 'CoinCoin';

    id.addEventListener('input', (e)=>{
        if(e.target.value.length < 1){
            typing();
        }
    })

    function typing(){
        let placeholder = '';
        let x = 0;
        id.setAttribute('value', '');
        let interval = setInterval(() =>{
            placeholder += id_placeholder[x];
            x++;
    
            id.setAttribute('value', placeholder);
            if(x > id_placeholder.length - 1){
                clearInterval(interval);
            }
        },200)
    }
    typing();


    setTimeout(() => {
        window.location.href="chargement.html";
    },2000)
})