var type1 = type2 = -1;

var defendingType = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

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

function multTC(t_type) {
    for (let i = 0; i < 18; ++i)
        defendingType[i] *= typeChar[i][t_type];
}

function getTypeChart() {
    defendingType = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    if( type1 == type2 ) {
        if ( type1 != -1 && type2 != -1 )
            multTC(type1);
    }
    else if( type1 == -1)
        multTC(type2);
    else if( type2 == -1 )
        multTC(type1);
    else {
        multTC(type1);
        multTC(type2);
    }

    for (let i = 0; i < 18; i++) {
        document.getElementById(`a${i}`).innerHTML = defendingType[i];
    }
}

function getType() {
    setImg();
    setbgColor();
    getTypeChart();
}