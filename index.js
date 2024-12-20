var prince = document.getElementById('Prince');
var Godfred = document.getElementById('Prince');
var Benedicta = document.getElementById('Prince');
var Yeboah = document.getElementById('Prince');
var Bright = document.getElementById('Prince');

prince.addEventListener('onclick', ()=>{
    prince.textContent = Image;
})





const inputs1 = document.getElementById('inputs1');
const inputs2 = document.getElementById('inputs2');
const inputs3 = document.getElementById('inputs3');
const inputs4 = document.getElementById('inputs4');
const inputs5 = document.getElementById('inputs5');
const color2 = document.getElementById('color2');

color2.onclick = function(){
if(inputs1.value === ""){
    window.alert("Please fill in the entire form");
}
}