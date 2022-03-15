//DOM
const btns = [...document.querySelectorAll('.btn')];
const listeKeycode = btns.map(btn => btn.dataset.key);
const output = document.querySelector('.output');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calcule(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key; 
    calcule(valeur)
})

const calcule = (valeur) => {
if(listeKeycode.includes(valeur)){
    switch(valeur){
        case '8' : output.textContent = "" ;
        break;

        case '13' : 
            const calc = eval(output.textContent);
            output.textContent = calc;
        break; 
        
        default: 
          const indexKeycode = listeKeycode.indexOf(valeur);
          const btn = btns[indexKeycode];
          output.textContent += btn.innerHTML;
           
    }
}
}
 window.addEventListener('error', (e) => {
     output.textContent = "NaN"
 })

