var type1 = type2 = -1;

function setImg() {
    let divpkm = document.getElementById('pkm');
    let divImg = document.getElementById('divImg');
    let imgPkm = 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/';
    let imgNull = 'https://raw.githubusercontent.com/msikma/pokesprite/master/misc/mark/zero-energy-mark.png'
    type1 = document.getElementById('type1').value;
    type2 = document.getElementById('type2').value;
    let pkmChr = null;

    if( type1 == -1 && type2 == -1 )
        pkmChr = null;
    else if( type1 == -1 )
        pkmChr = pkm[type2][type2];
    else if( type2 == -1 )
        pkmChr = pkm[type1][type1];
    else
        pkmChr = pkm[type1][type2];

    if( pkmChr == null ) {
        if (!divImg.classList.contains('pad'))
            divImg.classList.add('pad');
        divpkm.src = imgNull;
    }
    else {
        if (divImg.classList.contains('pad'))
            divImg.classList.remove('pad');
        divpkm.src = `${imgPkm}${pkmChr}.png`;
    }
}

function setbgColor() {
    let divImg = document.getElementById('divImg');
    let text = 'linear-gradient(to bottom right, ';
    type1 = document.getElementById('type1').value;
    type2 = document.getElementById('type2').value;

    if( type1 == -1 && type2 == -1 )
        divImg.style.backgroundImage = `${text}#FFFFFF, #FFFFFF)`;
    else if( type1 == -1 )
        divImg.style.backgroundImage = `${text}${bgColors[type2]}, ${bgColors[type2]})`;
    else if( type2 == -1 )
        divImg.style.backgroundImage = `${text}${bgColors[type1]}, ${bgColors[type1]})`;
    else
        divImg.style.backgroundImage = `${text}${bgColors[type1]}, ${bgColors[type2]})`;
}

function getType() {
    setImg();
    setbgColor();
}