// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

let buttonOne = document.getElementById('fix-part-one');
let buttonTwo = document.getElementById('fix-part-two');
let buttonThree = document.getElementById('fix-part-three');
let buttonFour = document.getElementById('fix-part-four');

let i1 = "460";
let i2 = "00";
let i3 = "00";
let i4 = "00";

document.getElementById('target').innerHTML = "0" + i1 + i2 + i3 + i4;

buttonOne.addEventListener('click', () => {
    i1 = Math.floor(Math.random() * 39) +460;
    if(i1 > 10) {
        i1 = i1;
    }
    document.getElementById('part-one').value = i1;
    document.getElementById('target').innerHTML = "0" + i1 + i2 + i3 + i4;

});

buttonTwo.addEventListener('click', () => {
    i2 = Math.floor(Math.random() * 99) ;
    if(i2 < 10) {
        i2 = "0" + i2;
    }
    document.getElementById('part-two').value = i2;
    document.getElementById('target').innerHTML = "0" + i1 + i2 + i3 + i4;
})

buttonThree.addEventListener('click', () => {
    i3 = Math.floor(Math.random() * 99) ;
    if(i3 < 10) {
        i3 = "0" + i3;
    }
    document.getElementById('part-three').value =i3;
    document.getElementById('target').innerHTML = "0" + i1 + i2 + i3 + i4;
})

buttonFour.addEventListener('click', () => {
    i4 = Math.floor(Math.random() * 99) ;
    if(i4 < 10) {
        i4 = "00" + i4;
    }
    document.getElementById('part-four').value = i4;
    document.getElementById('target').innerHTML = "0" + i1 + i2 + i3 + i4;
})

})();