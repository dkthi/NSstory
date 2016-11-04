var icon = document.querySelector('i');

function fade(){
    if(icon.innerHTML == 'star_border'){
        icon.innerHTML = 'star';
    }
    else[
        icon.innerHTML = 'star_border';
    ]
}

icon.addEventListener('click', fade);
