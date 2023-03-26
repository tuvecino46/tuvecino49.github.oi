const gente = document.querySelector('.gente');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(gente)



gente.addEventListener('click', ()=>{
     menu.classList.toggle("spread")

})




window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != gente  ){


        menu.classList.toggle("spread")

    }

})