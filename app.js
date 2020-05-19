window.addEventListener('load', changeColor);

function changeColor () {
  let red = document.getElementById('red-slider').value;
  let green = document.getElementById('green-slider').value;
  let blue = document.getElementById('blue-slider').value;
  let rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';

  let color = document.getElementById('color-square');
  color.style.backgroundColor = rgb;

  document.getElementById('red-value').innerHTML = red;
  document.getElementById('green-value').innerHTML = green;
  document.getElementById('blue-value').innerHTML = blue;
  document.getElementById('rgb-value').innerHTML = rgb;
}

document.getElementById('red-slider').addEventListener('input', changeColor);
document.getElementById('green-slider').addEventListener('input', changeColor);
document.getElementById('blue-slider').addEventListener('input', changeColor);