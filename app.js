// https://www.omnicalculator.com/health/bsa

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const BSARadio = document.getElementById('BSARadio');
const weightRadio = document.getElementById('weightRadio');
const heightRadio = document.getElementById('heightRadio');

let BSA;
let weight = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

BSARadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Height';
  weight = v1;
  height = v2;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'BSA';
  variable2.textContent = 'Height';
  BSA = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'BSA';
  variable2.textContent = 'Weight';
  BSA = v1;
  weight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(BSARadio.checked)
    result.textContent = `BSA = ${computeBSA().toFixed(2)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

// BSA = 0.007184 * weight^0.425 * height^0.725

function computeBSA() {
  return 0.007184 * Math.pow(Number(weight.value), 0.425) * Math.pow(Number(height.value), 0.725);
}

function computeweight() {
  return Number(BSA.value) / Number(height.value);
}

function computeheight() {
  return Number(BSA.value) / Number(weight.value);
}